import * as express from "express";

import upload from "../middlewares/multer";
import { ThreadController } from "../controlers/ThreadControler";
import { AuthController } from "../controlers/AuthControler";
import { LikeController } from "../controlers/Like";
import { CommentController } from "../controlers/CommentControler";
import checkAuth from "../middlewares/Auth";
import { UserControler } from "../controlers/UserControler";

const Routes = express.Router();
const threadController = new ThreadController();
const authController = new AuthController();
const likeController = new LikeController();
const commentController = new CommentController();
const userControler = new UserControler();

// ROUTING AUTH USER
Routes.post(
  "/auth/register",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "sampul", maxCount: 1 },
  ]),
  authController.register
);
Routes.post("/auth/login", authController.login);
Routes.get("/auth/check", checkAuth, authController.check);
Routes.get("/users", checkAuth, userControler.getAllUser);

// ROUTING THREADS
Routes.post(
  "/thread",
  checkAuth,
  upload.single("image"),
  threadController.createThread
);
Routes.get("/threads", checkAuth, threadController.getAllThreadsWithTotalLikes);
Routes.get("/threads/:id", checkAuth, threadController.getById);

// ROUTING LIKE
Routes.post("/like", checkAuth, likeController.addLikeToThread);

// ROUTING COMMENT
Routes.post("/comment", checkAuth, commentController.addComment);
Routes.get("/comments", checkAuth, commentController.getAllComments);
Routes.get("/comments/:id", checkAuth, commentController.getCommentsByPostId);

export default Routes;
