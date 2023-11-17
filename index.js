const express =require("express")
const app=express()
const port=3000 || process.env.PORT



app.get('/',(req,res)=>{  //cuando el clinte colocite acceso a la ruta primcipal el servidor va a escuchar con get
    res.sendFile('./public/index.html',{
        root:__dirname
    }) //luego de escuchar la petición va ha enviar el archivo como respuesta 
   {

   }
})

app.listen(port,()=>{
  console.log("server is running on port",port)

})