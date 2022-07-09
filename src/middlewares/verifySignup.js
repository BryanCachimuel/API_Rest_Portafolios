//Verifica si el usuario esta enviando un correo nuevo o si el usuario ya existe en pocas palabras es una validación
import { ROLES } from '../models/Role' 
import User from '../models/User';

export const checkDuplicateUsernameOrEmail= async (req, res, next)=>{
    const user= await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'El usuario ya existe'})

    const email=await User.findOne({email: 'El email ya existe'})
    if(email) return res.status(400).json({message: 'El email ya existe'})

    next();
}

export const checkRolesExisted = (req, res , next)=>{
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message:`Rol ${req.body.roles[i]} no existe`
                })
            }
        }
    }
    next();
}