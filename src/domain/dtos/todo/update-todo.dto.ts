export class UpdateTodoDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completeAt?: Date 
  ) {}

  get values(){

    const returnObj:{[key:string]:any}={
    }
    if(this.text)  returnObj.text=this.text;
    if(this.completeAt)  returnObj.completeAt=this.completeAt;
    return returnObj;
  }

  static update(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const {id, text, completeAt } = props;
 
    if(!id || isNaN(Number(id))) return ['id must be a valid number']

     let newCompleAt=completeAt
    if (completeAt) {
      newCompleAt = new Date(completeAt);
      if (newCompleAt.toDateString() === "Invalid Date") {
        return ["completedAt must be a valid date"];
      }
    }

    return [undefined, new UpdateTodoDto(id,text,newCompleAt)];
  }
}
