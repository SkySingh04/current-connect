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
var bill=null

// Endpoint to update the unit value
app.post("/updateUnit", (req, res) => {
  const { unit } = req.body;
  bill = unit; // Store the unit value
  res.json({ message: "Unit value updated successfully" });
  console.log(bill)
});




app.get("/order", (req, res) => {
    try {
      console.log("unit=" + bill)

      const options = {
        amount: bill *100, // change this shirish 
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
      console.log("bill=" + bill)
      return request(
        {
          method: "POST",
          url: `https://${PAYMENTID}:${PAYMENTKEY}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
          form: {
            amount: bill*100, // change this shirish
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