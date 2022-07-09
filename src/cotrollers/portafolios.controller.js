import Portafolios from '../models/Portafolios';
import Usuario from '../models/User';

export const createPortafolios=async(req, res)=>{
    const {name, tipo}=req.body
    const newPortafolio= new Portafolios({name,tipo});
    const saveportafolios=await newPortafolio.save();
    res.status(201).json(saveportafolios)
}   

export const getPortafolios=async(req, res)=>{
    const portafolios=await Portafolios.find()
    res.json(portafolios)
}