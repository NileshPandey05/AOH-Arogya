import React from "react";
import pricehero from "../images/pricingbanner_img.webp";
import { useStateValue } from "../context/StateProvider";


const Pricingplans = () => {

  const [{user},dispatch] = useStateValue();
  // Array of pricing plans
  const plans = [
    {
      title: "Family Health Plan",
      description:
        "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
      price: 249,
      features: [
        "Whole Family Coverage",
        "Reduced Vaccination Costs",
        "24/7 Medical Advice",
      ],
    },
    {
      title: "Senior Wellness Plan",
      description:
        "Access sports injury assessments, physiotherapy, and expert advice for peak performance and recovery for athletes.",
      price: 169,
      features: [
        "Personalized Assessments",
        "Preventive Care",
        "Expert Medical Advice",
      ],
    },
    {
      title: "Sports & Fitness Plan",
      description:
        "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years..",
      price: 199,
      features: [
        "Fitness Programs",
        "Mental Health Resources",
        "Nutrition Advice",
      ],
    },
    {
      title: "Child Health Plan",
      description:
        "Specialized healthcare for children. Ensure their growth and development with pediatric assessments and vaccinations.",
      price: 199,
      features: ["Pediatric Assessments", "Vaccinations", "Growth Monitoring"],
    },
    {
      title: "Women Health Plan",
      description:
        "Comprehensive women's health services. Receive expert gynecological care, family planning support, and prenatal/postnatal.",
      price: 399,
      features: [
        "Exclusive Benefits",
        "Advanced Treatments",
        "Priority Appointments",
      ],
    },
    {
      title: "Dental Health Plan",
      description:
        "Enjoy regular dental check-ups, emergency coverage, and exclusive discounts on dental procedures.",
      price: 299,
      features: [
        "Wellness Programs",
        "Health Screenings",
        "Ergonomic Assessments",
      ],
    },
  ];

  const makePayment = async (price) => {
    console.log(price);
    const amount = price;
    const currency = "INR";
    const recieptId = "qwsaq1";
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: recieptId,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const order = await response.json();
    console.log("order", order);

    var options = {
      key: "rzp_test_BWxtiDw9yxGbwC", // Enter the Key ID generated from the Dashboard
      amount: price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "ArogyaSahayak", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: user.displayName, //your customer's name
        email: user.email,
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    if (order.status === 'created') {
      console.log("inside this block");
      rzp1.on('payment.success', async function (response) { // Add success handler
        console.log('Payment Successful!', response);
        const successUrl = 'http://localhost:3000/'; // Replace with your success page URL
        window.location.href = successUrl; // Redirect to success page
      });
    }
    rzp1.open();
  };

  return (
    <div>
      <section className="flex items-center justify-center w-full md:pl-36 -mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl">
          <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
            <div className="flex"></div>
            <p className="md:text-6xl text-4xl text-center md:text-start  font-extrabold mt-5 md:-ml-9">
              Find the Right Plan for You&nbsp;
            </p>
            <p className="mt-5 md:mt-1 text-mediumGrey md:w-3/4 text-center md:text-start text-xl font-semibold md:-ml-9">
              Explore Our Membership Options and Start Your Journey to Better
              Health
            </p>
          </div>
          <div className="relative">
            <div className="md:h-screen md:absolute flex items-center justify-center md:pb-36">
              <img src={pricehero} alt="Hero Banner" />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-10 md:-mt-32">
        <p className="text-5xl font-bold md:ml-48 md:mr-48">
          Choose Your Arogya Sahayak Membership Plan
        </p>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 justify-items-center">
          {plans.map((plan, index) => (
            <div key={index} className="border w-[350px] h-[450px] rounded-2xl">
              <div className="bg-blue-800 h-[250px] rounded-xl"></div>
              <div className="-mt-[270px]">
                <p className="text-2xl font-semibold py-2 h-12 w-[250px] ml-12 mr-auto text-center bg-blue-500 text-white rounded-3xl">
                  {plan.title}
                </p>
                <p className="text-start ml-6 mt-4 text-white text-md font-medium mr-6">
                  {plan.description}
                </p>
                <p className="mt-8 text-start ml-6 text-5xl font-bold text-white">
                  ₹{plan.price}
                  <span className="text-xl">/month</span>
                </p>

                <div className="mt-20 text-start">
                  <ul className="list-disc ml-10 text-xl font-semibold -mt-5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mt-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className="text-xl font-semibold bg-blue-800 text-white h-10 w-80 rounded-2xl"
                    onClick={() => {
                      makePayment(plan.price);
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricingplans;
