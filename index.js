const express =require("express")
const app=express()

app.set("port", process.env.PORT || 4000);

app.get('/',(req,res)=>{  //cuando el clinte colocite acceso a la ruta primcipal el servidor va a escuchar con get
    res.sendFile('./public/index.html',{
        root:__dirname
    }) //luego de escuchar la petición va ha enviar el archivo como respuesta 
   {

   }
})

app.listen(app.get("port"),()=>{
  console.log("server is running on port",app.get("port"))

})