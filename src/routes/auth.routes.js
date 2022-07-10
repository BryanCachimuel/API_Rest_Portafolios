import {Router} from 'express'
const router=Router();

import * as authCtrl from '../cotrollers/auth.controller';
import { verifySignup } from '../middlewares';

router.post('/api/auth/signup',[verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],authCtrl.signup)
router.post('/api/auth/signin',authCtrl.signin)

//Rutas de registro y login
router.get('/api/portafolio/usarios',authCtrl.registro);
//router.get('/api/portafolio',authCtrl.login);

export default router;