const app=require("./app")

//setear el archivo de configuración
const dotenv=require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({path: 'back/config/config.env'})

//Configuramos a base de datos
connectDatabase();

//Llamemos el servidor
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor inicializado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`);
})