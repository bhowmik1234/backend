import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  // getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/new", adminOnly, singleUpload, newProduct);

// router.get("/search", getAllProducts);
router.get("/latest", getlatestProducts);
router.get("/category", getAllCategories);
router.get("/admin-products", getAdminProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly,singleUpload, updateProduct)
  .delete(adminOnly,deleteProduct);

export default router;
