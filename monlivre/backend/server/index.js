import express from 'express';
import 'dotenv/config';
import Router from '../routes/index.js';
import cors from 'cors'



class Server {
    constructor() {
        this.router = Router;
        this.port = process.env.PORT;
        this.app = express();
    }
    
    start() {
        this.app.use(cors())
        this._setupRoutes();
        this._listen();
        this.app.use(express.static('public')); 
        this.app.use('/images', express.static('images'));

    }

    _setupRoutes() {
        this.router.create(this.app);
    }

    _listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        });
    }




}

export default Server;