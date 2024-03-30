const express = require("express");
const app = express();
const Razorpay = require("razorpay");
const mailSender = require("./nodemailer");
const cron = require("node-cron");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/orders", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.key_id,
      key_secret: process.env.key_secret,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("error");
    }

    res.json(order);
    if (order) {
      res.redirect("http://localhost:3000/"); // Redirect to success page
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//mailsender route
app.post("/mail", async (req, res) => {
  try {
    const { email, title, body } = req.body;
    if (!email || !title || !body) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }

    cron.schedule(`0 8,16 * * *`, async () => {
      await mailSender(email, title, body);
    });

    return res.status(200).json({
      success: true,
      message: "Mail scheduled",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
