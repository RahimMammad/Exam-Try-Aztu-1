import ProductModel from "../models/ProductModel.js"

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getProductBuId = async (req, res) => {
    try {
        const products = await ProductModel.findById(req.params.id)
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, price, description, image, author, avatar} = req.body
        const newProduct = new ProductModel({name, price, description, image, author, avatar})
        newProduct.save()
        res.status(200).send({msg: "Added"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {name, price, description, image, author, avatar} = req.body
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id)
        if(updateProduct) {
            updateProduct.name = name,
            updateProduct.description = description,
            updateProduct.price = price,
            updateProduct.image = image,
            updateProduct.author = author,
            updateProduct.avatar = avatar
        }
        updateProduct.save()
        res.status(200).send({msg: "Updated"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: "Deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}
