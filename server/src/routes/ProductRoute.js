import express from "express"
import { createProduct, deleteProduct, getProductBuId, getProducts, updateProduct } from "../controllers/ProductController.js"

const route = express.Router()
route.get("/", getProducts)
route.get("/:id", getProductBuId)
route.post("/", createProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)

export default route