import {Router} from 'express'
const router=Router();
import * as userCtrl from '../cotrollers/user.controller'
import { authJwt, verifySignup } from '../middlewares';

router.get('/api/portafolio',userCtrl.entrada);
router.post('/api/portafolios/usuarios',[authJwt.verifyToken,authJwt.isAdmin,verifySignup.checkRolesExisted],userCtrl.getteUser)
router.get('/api/portafolios/usuarios/:usersId',userCtrl.usuarioID)

export default router;