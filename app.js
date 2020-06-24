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
import { localsMiddleware } from "./middlewares";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleware);
// middleware 들을 거치고 마지막에 url

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter); // localhost:4001/user/ ~~
app.use(routes.videos, videoRouter);

export default app;
/*
app.get("/", function (req, res) {
    res.send("hello world");
})
*/