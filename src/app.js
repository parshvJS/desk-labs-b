import cookieParser from "cookie-parser";
import express, { urlencoded } from "express"
import uploadRoute from "./routes/uploaded.js";
import cors from "cors";

const app = express();


app.use(cors());
app.use(cookieParser());
app.use(urlencoded())

app.use(express.json(
{
    limit:"16kd"
}))
app.use("/api/v1/uploader",uploadRoute);

export default app