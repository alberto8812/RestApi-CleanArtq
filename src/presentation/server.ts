import express from "express";
import path from "path";

interface Options{
    PORT:number,
    PUBLIC_PATH:string
}


export class Server {
  private app = express();
  private readonly port:number;
  private readonly publicPath:string;

    constructor(options:Options){
        const {PORT,PUBLIC_PATH}=options;
        this.port=PORT;
        this.publicPath=PUBLIC_PATH
    }
  async start() {
    //middleware

    //public folder
    this.app.use(express.static(this.publicPath));

    this.app.get('*',(req,res)=>{
        //para cuando manejemos rutas fijas con react  es decir que cargue sin
        //que se pierda el direccionamiento de rutas
        const idexPath=path.join(__dirname+`../../../${this.publicPath}/index.html`);
        res.sendFile(idexPath)
    })

    this.app.listen(this.port, () => {
      console.log(`server running un port ${this.port}`);
    });
  }
}
