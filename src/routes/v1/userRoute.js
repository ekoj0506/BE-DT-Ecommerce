import express from 'express';

import {StatusCodes,} from 'http-status-codes';
import { userValidation } from '../../validations/userValidation';
import { userController } from '~/controllers/userController';
const Router= express.Router();

Router.route('/')
.post(userController.create )
Router.route(('/signin'))
.post(userController.signIn)
export const userRoute=Router
Router.route('/address')
.post()
.get()