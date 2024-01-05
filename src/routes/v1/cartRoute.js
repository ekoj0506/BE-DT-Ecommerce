import express from 'express';
import { cartController } from '~/controllers/cartController';
import {auth} from '../../middlewares/auth'
const Router= express.Router();

Router.route('/')
.get(auth.verifyToken, cartController.getCart)
.post(auth.verifyToken, cartController.updateCart)
export const cartRoute=Router