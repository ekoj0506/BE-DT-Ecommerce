import express from 'express';

import {
	StatusCodes,
} from 'http-status-codes';
import { userValidation } from '../../validations/userValidation';
import { userService } from '../../services/userService';
const Router= express.Router();

Router.route('/')
.get((req,res)=>{
    res.status(StatusCodes.OK).json({message: 'oke'})
})
.post(userValidation.login, userService.login )
export const userRoute=Router