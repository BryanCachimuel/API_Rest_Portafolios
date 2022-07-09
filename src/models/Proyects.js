import {Schema, model} from 'mongoose' 

const proyectsSchema= new Schema({
    name:String,
    category: String,
    timestamps: {type:Date, default:Date.now}
},{
    versionKey:false
})

export default model('Proyects', proyectsSchema);