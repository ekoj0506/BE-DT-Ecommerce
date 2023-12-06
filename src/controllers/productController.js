import { StatusCodes} from 'http-status-codes';
import { productService } from '../services/productService';
import ApiError from '../utils/ApiError';
import { cloud } from '../services/cloudinaryService';
const create =async (req, res)=>{
    try {
       console.log(req.file)
        const idImageProduct= await cloud(req.file.path);
        const dataProduct={
            ...req.body,
            images: idImageProduct.asset_id,
        }
        console.log('dddddddddddddddddddddddddddddddddddddd',idImageProduct)
               const returnProductService=await productService.create(dataProduct)
               res.status(StatusCodes.CREATED).json(returnProductService)
    }
    catch (error)
    {   
     

        res.status(400).json(error)
    }


}
const getProducts =async (req, res)=>{
    try 
    {
       const products =await productService.get()

       res.status(StatusCodes.OK).json(products)
    }
    catch (error)
    {   
        console.log(error)
        res.status(400).json(error)


}
}
export const productController =
{
    create,
    getProducts

}




