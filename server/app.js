import express from "express";
import cors from 'cors'
import contactRoute from "./routes/contact.js";
const app = express();
const port =5000;
app.use(cors());
app.use(express.json());
app.use("/contact", contactRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
