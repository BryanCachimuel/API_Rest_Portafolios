import mongoose from 'mongoose';

mongoose.connect("mongodb://Localhost/proyectosdb",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
    .then(db=>console.log("Base de Datos Conectada"))
    .catch(error=>console.log(error))