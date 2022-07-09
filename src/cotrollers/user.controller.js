//Nuevo metodo de entrada
import Usuario from '../models/User';

export const entrada=(req, res)=>{
    res.render('index')
}

export const getteUser= async (req, res)=>{
    const usuarios=await Usuario.find();
    res.json (usuarios);
}

export const usuarioID= async(req, res)=>{
    const usersid= await Usuario.findById(req.params.usersId);
    res.status(200).json(usersid)
}
