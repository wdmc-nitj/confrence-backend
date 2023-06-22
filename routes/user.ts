import express from "express";
import User from "../crud/user";

const userController = new User();

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.post("/bulk", userController.addUsersInBulk);
router.delete("/bulk", userController.deleteAllUsers);

router.get("/team/:team", userController.getUserByTeam);
router.get("/token/:token", userController.getUserByToken);
router.get("/accessType/:accessType", userController.getUsersByAccessType);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;


