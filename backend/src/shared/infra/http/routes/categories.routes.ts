import multer from "multer";
import uploadConfig from "@config/upload";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "@modules/category/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/category/useCases/deleteCategory/DeleteCategoryController";
import { havePermission } from "../middlewares/havePermission";
import { GetCategoryController } from "@modules/category/useCases/getCategory/GetCategoryController";
import { GetCategoriesController } from "@modules/category/useCases/getCategories/GetCategoriesController";
import { UpdateCategoryController } from "@modules/category/useCases/updateCategory/UpdateCategoryController";

const upload = multer(uploadConfig);
const categoriesRoutes = Router();

const getCategoryController = new GetCategoryController();
const getCategoriesController = new GetCategoriesController();
const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.get("/:id", ensureAuthenticated, upload.none(), havePermission("category.get"), getCategoryController.handle);
categoriesRoutes.get("/", ensureAuthenticated, havePermission("category.get"), getCategoriesController.handle);
categoriesRoutes.post("/", ensureAuthenticated, upload.single("image"), havePermission("category.create"), createCategoryController.handle);
categoriesRoutes.patch("/", ensureAuthenticated, upload.single("image"), havePermission("category.update"), updateCategoryController.handle);
categoriesRoutes.delete("/:id", ensureAuthenticated, havePermission("category.delete"), deleteCategoryController.handle);

export { categoriesRoutes };
