import { Router } from "express";
import {
  handleConversation,
  sendMail,
} from "../controllers/userConversation.controller.js";

const router = Router();

router.route("/chat").post(handleConversation);

router.route("/sendMail").post(sendMail);

export default router;
