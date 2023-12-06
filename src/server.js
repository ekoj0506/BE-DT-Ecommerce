
import express from 'express'
import {CONNECT_DB, GET_DB } from '../src/config/mongodb'
import { env } from './config/environment'
import { APIs_V1 } from './routes/v1'
import { cloud } from './services/cloudinaryService'
const app = express()

const START_SERVER =()=>
{


const hostname = 'localhost'
const port = 8017
app.use(express.json())
app.use('/v1', 
  APIs_V1)
app.get('/', (req, res)=>{
    res.status(200).json({mes: '222'})
})
app.listen(env.APP_PORT, env.APP_HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
})

}
(async ()=>{
    try{
        await CONNECT_DB();
        console.log('connected to MongoDB cloud')
        START_SERVER()

    }
    catch (error) {
console.error(error)
process.exit(0)
    }
})()

// CONNECT_DB()
// .then(()=>{console.log('connected to mongoDB cloud Atlas')})
// .then(()=>START_SERVER())
// .catch(error =>{
//     console.error(error)
//     process.exit(0)})