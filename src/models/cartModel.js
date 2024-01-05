import ApiError from '~/utils/ApiError'
import { GET_DB } from '../config/mongodb'
import { ObjectId } from 'mongodb'
const CART_COLLECTION_NAME='cart'
const PRODUCT_COLLECTION_NAME='product'
const get =async (idUser)=>
{
    try{
        const result = await GET_DB().collection(CART_COLLECTION_NAME).findOne({idUser:idUser})
        console.log(idUser)
       
        
        return result
    }
    catch (error)
    {    
        console.log('hellooo333333')
        throw new ApiError(401,'loi category')
    }
}
const update = async (data, idUser)=>
{
   try{
    const result = await GET_DB().collection(CART_COLLECTION_NAME).findOne({idUser:idUser})

    if (!result)
    {     const dataCart={idUser:idUser,cart:data}
    console.log('666666667',dataCart)
      const newCart = await GET_DB().collection(CART_COLLECTION_NAME).insertOne({idUser:idUser, cart:[data]})
      const cart=await GET_DB().collection(CART_COLLECTION_NAME).findOne({idUser:idUser})
      return cart
    } 
    else{
        console.log('listcart',result.cart)
        const dataCart=result.cart
        dataCart.push(data)
        const updateCart = await GET_DB().collection(CART_COLLECTION_NAME).updateOne({idUser:idUser},{$set:{cart:dataCart}})
        const cart=await GET_DB().collection(CART_COLLECTION_NAME).findOne({idUser:idUser})
         return cart
    }
    
    // console.log(result)
    // const returnCate = await GET_DB().collection(CATEGORY_COLLECTION_NAME).findOne({_id: result.insertedId})
   }
   catch( error)
   { console.log('hellooo')
    throw new ApiError(401,'loi category')
   }

}
export const cartModel = {
    CART_COLLECTION_NAME,
    update,
    get
}