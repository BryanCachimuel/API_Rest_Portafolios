import { Schema, model } from 'mongoose';

export const ROLES=["user","administrador","moderador"]

const rolSchema= new Schema({
    name: String,
},{
    versionKey: false
})

export default model("Role",rolSchema);