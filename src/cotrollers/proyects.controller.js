import Proyects from '../models/Proyects';

export const createProyects = async(req, res) => {
   
    const{name, category}=req.body
    const newProyecto= new Proyects({name,category});
    const proyectsave= await newProyecto.save()
    res.status(201).json(proyectsave);
}

export const getProyects = async(req, res) => {
    const proyects= await Proyects.find();
    res.json(proyects);
}   

export const getProyectsById = async (req, res) => {
    const proyectsid= await Proyects.findById(req.params.proyectsId)
    res.status(200).json(proyectsid);
}

export const updateProyectsById = async (req, res) => {
    const updateProyect = await Proyects.findByIdAndUpdate(req.params.proyectsId, req.body,{
        new: true
    })
    res.status(200).json(updateProyect);
}

export const deleteProyectsById = async (req, res) => {
    const {proyectsId}=req.params;
    await Proyects.findByIdAndDelete(proyectsId);
    res.status(204).json({message:"Proyecto Eliminado"});
}
