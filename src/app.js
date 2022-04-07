import express from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan'
import pkg from '../package.json'
import connection from './db'
import productRoute from './routes/product.routes'
import customerRoute from './routes/customer.routes'
import orderRoute from './routes/order.route'

const app = express()
const port = 4000;

app.set('pkg',pkg)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.use('/api',productRoute)
app.use('/api',customerRoute)
app.use('/api',orderRoute);

app.listen(port,()=>{
    console.log('Servidor en puerto 4000')
})