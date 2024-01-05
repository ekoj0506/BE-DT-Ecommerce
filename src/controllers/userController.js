import { StatusCodes} from 'http-status-codes';
import { userService } from '~/services/userService';
import ApiError from '~/utils/ApiError';
const signIn= async (req,res,next)=>{
     try
     {
        const data={
            username: req.body.username,
            passwork: req.body.password
        }
        console.log(data)
        const result =await userService.signIn(data)
        console.log(result)
        res.status(StatusCodes.OK).json(result)
     }
     catch(error)
     {
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,Error(error).message))
     }
     
}
const create =async (req, res, next)=>
{   
    try 
    {
        const dataUser =
        {
            ...req.body,
            
        }
        const userServiceReturn =await userService.create(dataUser)
        console.log(userServiceReturn)
        res.status(StatusCodes.OK).json(userServiceReturn)

    }
    catch(error)
{    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,Error(error).message))
}

}
export const userController = {

    create,
    signIn

}