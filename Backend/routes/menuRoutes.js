import express from "express";
import { menuController } from "../controllers/menuController.js";
import requireLogin from "../middlewares/requireLogin.js";

const router = express.Router();

//admin protected routes
router.post("/add-category", requireLogin, menuController.addCategory);
router.patch("/edit-category/:categoryId", requireLogin, menuController.editCategory);
router.delete("/remove-category/:categoryId", requireLogin, menuController.removeCategory);
router.post("/add-item/:categoryId", requireLogin, menuController.addMenuItem);
router.patch("/edit-item/:itemId", requireLogin, menuController.editMenuItem);
router.delete("/remove-item/:itemId", requireLogin, menuController.removeMenuItem);

//open user routes
router.get("/get-all-categories", menuController.getAllCategories);
router.get("/get-category-items/:categoryId", menuController.getCategoryItems);
router.get("/get-all-items", menuController.getAllItems);
router.get("/get-category/:categoryId", menuController.getSingleCategory);
router.get("/get-item/:itemId", menuController.getSingleItem);

export default router;
