export class UpdateTodoDto {
  private constructor(
    private readonly id?: number,
    private readonly text?: string,
    private readonly createAt?: Date 
  ) {}

  get values(){

    const returnObj:{[key:string]:any}={
    }
    if(this.text)  returnObj.text=this.text;
    if(this.createAt)  returnObj.createAt=this.createAt;
    return returnObj;
  }

  static update(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const {id, text, createAt } = props;
 
    if(!id || isNaN(Number(id))) return ['id must be a valid number']

     let newCompleAt=createAt
    if (createAt) {
      newCompleAt = new Date(createAt);
      if (newCompleAt.toDateString() === "Invalid Date") {
        return ["completedAt must be a valid date"];
      }
    }

    return [undefined, new UpdateTodoDto(id,text,newCompleAt)];
  }
}
