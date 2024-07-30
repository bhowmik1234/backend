import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { addToWishList, deleteProduct, deleteWishList, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, myWishList, newProduct, updateProduct, } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
router.post("/new", adminOnly, singleUpload, newProduct);
router.get("/all", getAllProducts);
router.get("/latest", getlatestProducts);
router.get("/category", getAllCategories);
router.get("/admin-products", getAdminProducts);
router.post("/wishlist/:id", addToWishList);
router.route("/wishlist/my").get(myWishList).delete(deleteWishList);
router
    .route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default router;
