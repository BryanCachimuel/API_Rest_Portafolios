import {Router} from 'express'
const router=Router();

//Con el * pedimos importamos todos los controladores
import * as proyectCtrl from '../cotrollers/proyects.controller'
import * as portafolioCtrl from '../cotrollers/portafolios.controller'
import * as grupoProyectosCtrl from '../cotrollers/grupoproyectos.controller'
import { authJwt,verifySignup } from '../middlewares';

//Tipos de Portafolios
router.post('/api/portafolios/tipoPortafolio',[authJwt.verifyToken,authJwt.isUser,verifySignup.checkRolesExisted],portafolioCtrl.createPortafolios);
router.get('/api/portafolios/portafoliosall',[authJwt.verifyToken,authJwt.isUser,verifySignup.checkRolesExisted],portafolioCtrl.getPortafolios);

//Grupo de proyectos
router.post('/api/portafolios/grupoProyectos',[authJwt.verifyToken,authJwt.isUser],grupoProyectosCtrl.crearGrupo);
router.get('/api/portafolios/grupoProyectosall',[authJwt.verifyToken,authJwt.isUser],grupoProyectosCtrl.getGrupo);

//Proyectos
router.post('/api/portafolios/creacion',[authJwt.verifyToken,authJwt.isAdmin,authJwt.isUser,authJwt.isModerator],proyectCtrl.createProyects);
router.get('/api/portafolios/proyectosall',proyectCtrl.getProyects);
router.get('/api/portafolios/:proyectsId',proyectCtrl.getProyectsById);
router.put('/api/portafolios/:proyectsId',[authJwt.verifyToken,authJwt.isAdmin,authJwt.isModerator,authJwt.isUser],proyectCtrl.updateProyectsById);
router.delete('/api/portafolios/:proyectsId',[authJwt.verifyToken,authJwt.isAdmin],proyectCtrl.deleteProyectsById);

export default router;