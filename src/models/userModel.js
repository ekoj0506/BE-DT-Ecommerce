import Joi from 'joi'

const USER_COLLECTION_NAME='users'
const USER_COLLECTION_SCHEMA= Joi.object(
    {   

        userId: Joi.string().required().min(5).max(50).trim().strict(),
        phone:Joi.string().required().min(5).max(50).trim().strict(),
        passwork:Joi.string().required().min(5).max(50).trim().strict(),
        createAt: Joi.date().timestamp('javascript').default(Date.now)
    }
)
export const userModel = {
    USER_COLLECTION_NAME,
    USER_COLLECTION_SCHEMA
}