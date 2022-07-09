import {Schema, model} from 'mongoose';

const portafoliosSchema=new Schema({
    name:String,
    carrera:String,
    timestamps:{type:Date, default:Date.now}
},{
    versionKey:false
})

export default model('Portafolios',portafoliosSchema);