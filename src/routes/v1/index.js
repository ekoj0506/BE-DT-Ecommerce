
import express from 'express';
import { categoryRoute,  } from './categoryRoute';
import {
	StatusCodes,
} from 'http-status-codes';
import { productRoute } from './productRoute';
import { userRoute } from './userRoute';
import { cartRoute } from './cartRoute';
import { addressRoute } from './address';

const Router= express.Router();

Router.use('/category',categoryRoute)
Router.use('/user', userRoute)
Router.use('/product', productRoute )
Router.use('/cart', cartRoute )
Router.use('/address', addressRoute)
export const APIs_V1=Router
