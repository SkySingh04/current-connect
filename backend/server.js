import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
//import { Slot, MyData } from "./config/database.js";
import Razorpay from "razorpay";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config()

const PAYMENTID = process.env.RAZORPAY_ID;
const PAYMENTKEY = process.env.RAZORPAY_KEY;

var instance = new Razorpay({
  key_id: PAYMENTID,
  key_secret: PAYMENTKEY,
});
let bill=null

app.post('http://localhost:3000/api/perform-operation', (req, res) => {
  const unit = req.body.value;
  bill=unit
  // Perform your operation using the receivedValue


  res.json({ result:bill });
  
});




app.get("/order", (req, res) => {
    try {
      const options = {
        amount: 500 *100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
        // 1 for automatic capture // 0 for manual capture
      };
      instance.orders.create(options, async function (err, order) {
        if (err) {
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        return res.status(200).json(order);
      });
    } catch (err) {
      return res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  });


  app.post("/capture/:paymentId", (req, res) => {
    try {
      return request(
        {
          method: "POST",
          url: `https://${PAYMENTID}:${PAYMENTKEY}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
          form: {
            amount: 10*100, // amount == Rs 10 // Same As Order amount
            currency: "INR",
          },
        },
        async function (err, response, body) {
          if (err) {
            return res.status(500).json({
              message: "Something Went Wrong",
            });
          }
          console.log("Status:", response.statusCode);
          console.log("Headers:", JSON.stringify(response.headers));
          console.log("Response:", body);
          return res.status(200).json(body);
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  });


















app.get("/api/slots", (req, res) => {
    Slot.find()
      .then((slots) => res.json(slots))
      .catch((err) => res.status(500).json(err));
  });


















const port = 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});