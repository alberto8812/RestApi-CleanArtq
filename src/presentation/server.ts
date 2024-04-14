import express, { Router } from "express";
import path from "path";

interface Options{
    PORT:number,
    PUBLIC_PATH:string,
    routes:Router,//en el server recivimos el router
}


export class Server {
  private app = express();
  private readonly port:number;
  private readonly publicPath:string;
  private readonly routes:Router;

    constructor(options:Options){
        const {PORT,PUBLIC_PATH,routes}=options;
        this.port=PORT;
        this.publicPath=PUBLIC_PATH;
        this.routes=routes;
    }
  async start() {
    //middleware

    //public folder
    this.app.use(express.static(this.publicPath));

    /*router */
     this.app.use(this.routes)

    this.app.get('*',(req,res)=>{
        //para cuando manejemos rutas fijas con react  es decir que cargue sin
        //que se pierda el direccionamiento de rutas
        const idexPath=path.join(__dirname+`../../../${this.publicPath}/index.html`);
        res.sendFile(idexPath)
    });



    this.app.listen(this.port, () => {
      console.log(`server running un port ${this.port}`);
    });
  }
}
