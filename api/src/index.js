import 'dotenv/config';

import clienteController from './controller/clienteController.js';

import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());


// configuracao dos endpoints
server.use(clienteController);





server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))