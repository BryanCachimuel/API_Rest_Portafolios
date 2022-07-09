import GrupoProyectos from '../models/GrupoProyectos';

export const crearGrupo= async(req, res)=>{
    const {name,tipogrupo}=req.body
    const newGrupo= new GrupoProyectos({name,tipogrupo});
    const saveGrupo= await newGrupo.save()
    res.status(201).json(saveGrupo)
}

export const getGrupo=async(req, res)=>{
    const gruposProyectos=await GrupoProyectos.find()
    res.json(gruposProyectos)
}