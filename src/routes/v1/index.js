
import express from 'express';
import { categoryRoute,  } from './categoryRoute';
import {
	StatusCodes,
} from 'http-status-codes';
import { productRoute } from './productRoute';
import { userRoute } from './userRoute';

const Router= express.Router();

Router.use('/category',categoryRoute)
Router.use('/user', userRoute)
Router.use('/product', productRoute )
export const APIs_V1=Router
