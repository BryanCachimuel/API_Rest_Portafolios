import { format } from "morgan";
import {Schema, model} from 'mongoose';

const grupoProyectoSchema= new Schema({
    name: String,
    tipogrupo: String,
    timestamps: {type:Date, default:Date.now}
},{
    versionKey: false
})

export default model('GrupoProyectos',grupoProyectoSchema)