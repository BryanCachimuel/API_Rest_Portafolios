//Va a verificar si el usuario tiene un token y tambien que rol posee. En pocas palabras este archivo sirve para hacer la autorización
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken= async (req, res, next)=>{
   try {
    const token= req.headers["x-access-token"];
    console.log(token)
    if(!token) return res.status(403).json({message: "No a proporcionado un token"})

    const decoded= jwt.verify(token,config.SECRET)
    req.userId=decoded.id;

    const user= await User.findById(req.userId,{password:0})
    console.log(user)
    if(!user) return res.status(404).json({message: "Usuario no encontrado"})
    //console.log(decoded)
    next();
   } catch (error) {
      return res.status(401).json({message: "No autorizado"}) 
   }
};

export const isModerator=async (req, res, next)=>{
    const user= await User.findById(req.userId)
    const roles=await Role.find({_id: {$in: user.roles}})

    for(let i=0; i<roles.length; i++){
        if(roles[i].name==="moderador"){
            next()
            return;
        }
    }
    return res.status(403).json({message:"Requiere ser moderador"})
}

export const isAdmin= async (req, res, next)=>{
    const user= await User.findById(req.userId)
    const roles=await Role.find({_id: {$in: user.roles}})

    for(let i=0; i<roles.length; i++){
        if(roles[i].name==="administrador"){
            next()
            return;
        }
    }
    return res.status(403).json({message:"Requiere ser administrador"})
}

export const isUser= async (req, res, next)=>{
    const user=await User.findById(req.userId)
    const roles=await Role.find({_id: {$in: user.roles}})

    for(let i=0; i<roles.length; i++){
        if(roles[i].name==="user"){
            next()
            return;
        }
    }
    return res.status(403).json({message:"Requiere ser usuario"})
}