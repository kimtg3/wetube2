// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4001;

const handleListening = ()  =>
 console.log(`Listening on : http://localhost:${PORT}`);


const handleHome = (req, res) => res.send("Hi from home!!");

const handleProfile = (req, res) => res.send("You are on my profile");
// Javascript의 arrow funtion
const betweenHome = (req, res, next) => {
    console.log("I m between");
    next();
}

const protect = (req, res) => res.redirect("/profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
// middleware 들을 거치고 마지막에 url

app.get("/", protect);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

/*
app.get("/", function (req, res) {
    res.send("hello world");
})
*/