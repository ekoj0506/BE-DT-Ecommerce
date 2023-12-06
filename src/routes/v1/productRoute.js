import express from 'express';
import { productController } from '../../controllers/productController';
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();

Router.route('/')
.get(productController.getProducts)
.post(upload.single('imageProduct'),productController.create)
Router.route('/:id')
.get()
.post()


export const productRoute =Router
