
const login = async(req, res)=>
{
    try {
      throw Error('dsd') 
        }
    catch(error)
    {
       res.status(200).json({mes:'oke'})
    }

}
export const userService =
{
    login
}