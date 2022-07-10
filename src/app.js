/**
 * Sirve para configurar la aplicaciónde express
 */
import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
//Código reciente
import path from 'path';
import exhbs from 'express-handlebars';

import {createRoles} from './libs/initialSetup'

import proyectos from './routes/proyectos.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';


const app=express();
createRoles();

const routes=require('./routes/user.routes')


app.set('pkg',pkg);
//Código reciente
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exhbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');


//Este middlerwar sirve para que cada vez que un usuario visite el sistema responda con un mensaje GET / 404 23.653 MS -139
app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('Hola Bienvenido');
})

app.set('port',3005);

app.use(proyectos);
app.use(authRoutes);
app.use(userRoutes);

//Static files
app.use(express.static(path.join(__dirname,'public')));

export default app;