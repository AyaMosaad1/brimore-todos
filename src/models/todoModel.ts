  export default class TodoModel {
    useId:number;
    id:number;
    title: string;
    completed: Boolean;

    constructor() {
      this.useId = 0;
      this.id=0;
      this.title = '';
      this.completed = false;
    }
  }

export interface StateModel {
    todos: TodoModel[]
  }
