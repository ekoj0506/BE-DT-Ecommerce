import express from 'express';
import { productController } from '../../controllers/productController';
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();


Router.route('/detail')
.get(productController.getProduct)

Router.route('/products')
.get(productController.getProducts)
.post(upload.array('image',12),productController.create)
Router.route('/:id')
.get(productController.getProduct)
.post()


export const productRoute =Router
