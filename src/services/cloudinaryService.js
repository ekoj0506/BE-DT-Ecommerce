import ApiError from '~/utils/ApiError';
import { settingCloudinary } from '~/config/cloudinary';
export const cloud=async(pathImage)=>
{
  try{

const result=await settingCloudinary.uploader.upload(pathImage, {folder:'product'})
  return result
}
catch (error) 
{
  throw new ApiError(400,'error from cloudinary')}
}