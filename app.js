// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
// middleware 들을 거치고 마지막에 url

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter); // localhost:4001/user/ ~~
app.use("/video", videoRouter);

export default app;
/*
app.get("/", function (req, res) {
    res.send("hello world");
})
*/