import express from "express";
import { connectdb } from "./utils/configdb.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
// routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js"
import orderRoute from "./routes/order.js"
import payementRoute from "./routes/payement.js"
import dashboardRoute from "./routes/stats.js"

const app = express();
const PORT = 3000;

config({
    path: "./.env",
})
const stripeKey = process.env.STRIPE_KEY || "";
cloudinary.config({
    cloud_name: "dv1vpvfkg",
    api_key: "425872355748933",
    api_secret: "XWXjfWfxjjPLKgtCFxxO0sXK0T8",
  });


export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();
connectdb();
app.use(cors())

app.use(express.json());
app.use(morgan("dev"));
app.get('/', (req, res)=>{
    res.send("hello")
})

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payement", payementRoute);
app.use("/api/v1/dashboard", dashboardRoute);



app.use('/uploads', express.static("uploads"));
// error middleware
app.use(errorMiddleware);

app.listen(PORT, ()=>{
    console.log("running on port 3000.");
})