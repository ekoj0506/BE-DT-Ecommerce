import Joi from 'joi'
Joi.objectId = require('joi-objectid')(Joi)
import { GET_DB } from '../config/mongodb'
const PRODUCT_COLLECTION_NAME='product'
const PRODUCT_COLLECTION_SCHEMA= Joi.object(
    {   
        name: Joi.string().required().min(5).max(50).trim().strict(),
        images:Joi.string().required().min(5).max(50).trim().strict(),
        price: Joi.number().required().default(0),
        //categoryId: Joi.objectId().default(null),
        //description: Joi.string().required().min(5).max(5000).trim().strict().default('mo ta cccc à'),
        createAt: Joi.date().timestamp('javascript').default(Date.now)
    }
)
const create =async (data)=>
{
    try{
    
       const dataProductCreate = await PRODUCT_COLLECTION_SCHEMA.validateAsync(data, {abortEarly: false})
       console.log(dataProductCreate)
       const result = await GET_DB().collection(PRODUCT_COLLECTION_NAME).insertOne(dataProductCreate)
      const dataProduct = await GET_DB().collection(PRODUCT_COLLECTION_NAME).findOne({_id: result.insertedId})
       console.log(result)
       return dataProduct
    }
    catch (error)
    {
        console.log(error)
         throw new Error(error)
    }
}
const get =async ()=>
{
    try{
        // eslint-disable-next-line quotes
      const dataProducts = await GET_DB().collection(PRODUCT_COLLECTION_NAME).find({}).toArray()
      await console.log(dataProducts)
       return dataProducts
    }
    catch (error)
    {    
        console.log('toi day')
        console.log(error)
         throw new Error(error)
    }
}
export const productModel = {
    PRODUCT_COLLECTION_NAME,
    PRODUCT_COLLECTION_SCHEMA,
    create,
    get
}