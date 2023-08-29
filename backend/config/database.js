import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// app.use(cors());

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-mkb1opp-shard-00-00.g8ucfys.mongodb.net:27017,ac-mkb1opp-shard-00-01.g8ucfys.mongodb.net:27017,ac-mkb1opp-shard-00-02.g8ucfys.mongodb.net:27017/?ssl=true&replicaSet=atlas-1964lw-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to DB"))
  .catch((err) => console.error(err));

const slotSchema = new mongoose.Schema({

  name:String,
  customerId:String,
  units:String,
  amount:String,
});

export const Slot = mongoose.model("Slot", slotSchema);

// const salonSchema = new mongoose.Schema({
//   name: {
//     type: String,

//     required: true,
//   },
// });
// export const MyData = mongoose.model("MyData", salonSchema);
