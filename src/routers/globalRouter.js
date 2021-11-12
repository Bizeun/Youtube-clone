import express from "express";
import {home, join, login} from "../controllers/userController";
import {trending, somethingNew} from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", somethingNew);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;