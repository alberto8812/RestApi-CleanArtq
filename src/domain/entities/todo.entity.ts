// se asemanaja a la base de datos pero son los datos que vamos a usar en nuestra aplicacion
export class TodoEntity {
  constructor(
    public id: number,
    public text: string,
    public createAt?: Date | null
  ) {}

  get iCompleted(){
    //nos didica si el createAt tiene un valor
    return !!this.createAt;
  }

  public static fromOjbect(object:{[key:string]:any}):TodoEntity{
    const {id,text,createAt}=object
    if(!id) throw 'id isrequired'
    if(!text) throw 'text isrequired'

    let newCompleteAt;
    if(createAt){
      newCompleteAt=new Date(createAt);
      if(isNaN(newCompleteAt.getTime())){
        throw 'completeAt is no a validate date'
      }
    }
    return new TodoEntity(id,text,createAt)
  }

  
}
