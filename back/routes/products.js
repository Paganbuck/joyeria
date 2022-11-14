const express=require("express")
const router=express.Router();

const {getProducts} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establrcrmos desdela ruta que queremos ver el producto

module.exports=router;