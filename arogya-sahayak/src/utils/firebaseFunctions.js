import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  addDoc,
  updateDoc,
  where,
  getDoc,
  and,
  limit
} from "firebase/firestore";
import { firestore, storage } from "../firebase.config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { fetchUser } from "./fetchLocalStorageData";

const user = fetchUser();

export const getAllBloodRecords = async () => {
  const bloodRecordsCollection = collection(firestore, "bloodRecords");
  const bloodRecordsSnapshot = await getDocs(bloodRecordsCollection);

  const bloodRecords = [];
  bloodRecordsSnapshot.forEach((doc) => {
    bloodRecords.push(doc.data());
  });
  // console.log(bloodRecords);
  return bloodRecords;
};

export const updateBloodRecordsByAdminEmail = async (adminEmail, newData) => {
  try {
    const q = query(
      collection(firestore, "bloodRecords"),
      where("adminEmail", "==", adminEmail)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      try {
        const docRef = doc(firestore, "bloodRecords", document.id);
        await setDoc(docRef, newData);
        console.log("Data updated successfully for adminEmail:", adminEmail);
      } catch (error) {
        console.error("Error updating data for adminEmail:", adminEmail, error);
      }
    });
  } catch (error) {
    console.error("Error querying data:", error);
  }
};

export const saveBloodRecords = async (data) => {
  try {
    for (const record of data) {
      const docRef = doc(collection(firestore, "bloodRecords"));
      await setDoc(docRef, record);
    }
    console.log("Data saved successfully.");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const uploadImage = (imageUplaod) => {
  try {
    if (imageUplaod.length === 0) return;

    imageUplaod.map(async (imageItem) => {
      console.log(imageItem);
      const imageRef = ref(storage, `${user.uid}/${
        imageItem.filename
      }`);
      await uploadBytes(imageRef, imageItem.file).then((response) => {
        console.log(response);
      });
    });
  } catch (e) {
    console.error("Error saving Files", e);
  }
};

export const saveRegisteredData = async (imageUplaod, userInfo) => {
  try {
    uploadImage(imageUplaod, userInfo)
    const docRef = doc(collection(firestore, "patients/"), `${user.uid}`);
    const result = await setDoc(docRef, userInfo);
    console.log("result", result);
  } catch (e) {
    console.error("Error Registering user", e);
  }
};

export const fetchFiles = async (email) => {
  try {
    const filesList = {};
    const storageRef = ref(storage, `${email}/`);
    const response = await listAll(storageRef);
    await Promise.all(
      response.items.map(async (item) => {
        const url = await getDownloadURL(item);
        filesList[item.name] = url;
      })
    );
    console.log("filesList", filesList);
    const jsonData = JSON.stringify(filesList);
    console.log("jsonData", jsonData);
    localStorage.setItem("filesLists", jsonData);
    return filesList;
  } catch (e) {
    console.error("Error in fetching user files", e);
  }
};

export const fetchRegisteredData = async (uid) => {
  try {
    const docRef = doc(firestore, "patients/", uid);
    const docSnap = await getDoc(docRef);
    console.log("Document snapshot:", docSnap);
    return docSnap.data();
  } catch (e) {
    console.error("Error in fetching registered user info", e);
  }
};

export const dataLoader = async () => {
  const files = await fetchFiles();
  const data = await fetchRegisteredData();
  return { files, data };
};

export const saveDoctorData = async (docData) => {
  try {
    const docRef = doc(collection(firestore, "doctors/"));
    const result = await setDoc(docRef, docData);
    console.log("result", result);
  } catch (e) {
    console.error("Error Registering user", e);
  }
};

export const getDoctorId = async (email) => {
  try {
    let docId;
    const docRef = collection(firestore, "doctors");
    console.log("docRef", docRef);
    const q = query(docRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No Doctr found");
      return null;
    }
    querySnapshot.forEach((doc) => {
      const doctor = doc.data();
      docId = doc.id;
      console.log("Doctor ID:", docId);
    });
    return docId;
  } catch (e) {
    console.log(e);
  }
};

export const fetchAllDoctors = async () => {
  try {
    const doctorsIn = [];
    const docRef = collection(firestore, "doctors");
    const querySnapshot = await getDocs(docRef);
    if (querySnapshot.empty) {
      console.log("No Doctor found");
      return null;
    }
    querySnapshot.forEach((doc) => {
      const doctor = doc.data();
      doctorsIn.push({ doctorInfo: doctor, docID: doc.id });
    });
    console.log("all doctors", doctorsIn);
    return doctorsIn;
  } catch (e) {
    console.log(e);
  }
};

export const getDoctorDetails = async (id) => {
  try {
    const docRef = doc(collection(firestore, "doctors"), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAvailableSlots = async (id) => {
  try {
    const slotsArray = [];
    const docRef = collection(firestore, "slots");
    const q = query(
      docRef,
      and(where("allocatedTo", "==", "none"), where("docID", "==", id))
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    querySnapshot.forEach((doc) => {
      slotsArray.push(doc);
    });
    return slotsArray;
  } catch (e) {
    console.log(e);
  }
};


export const prescriptionUpload = async (imageUplaod, phoneNumber) => {
  try {
    if (imageUplaod.length === 0) return;

    imageUplaod.map(async (imageItem) => {
      console.log(imageItem);
      const imageRef = ref(storage,`${phoneNumber}/${imageItem.filename}`);
      await uploadBytes(imageRef, imageItem.file).then((response) => {
        console.log(response);
      });
    });
  } catch (e) {
    console.error("Error saving Files", e);
  }
};


export const fetchPatientData = async (number) => {
  try {
    let patient;
    const docRef = collection(firestore, "patients");
    // const docSnap = await getDoc(docRef);
    const q = query(docRef, where("phone", "==", number));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No such patitien found");
      return null;
    }
    querySnapshot.forEach((doc) => {
      patient = doc.data();

    });
    return patient;
  } catch (e) {
    console.error("Error in fetching registered user info", e);
  }
};

export const savedata = async (userInfo) => {
  try {
    const docRef = doc(collection(firestore, "patients/"), `${user.uid}`);
    const result = await setDoc(docRef, userInfo);
    console.log("result", result);
  } catch (e) {
    console.error("Error Registering user", e);
  }
};