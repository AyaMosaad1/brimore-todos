export default class TodoModel {
    useId:number;

    completed: Boolean;

    id:number;

    title: string;

    constructor() {
      this.useId = 0;
      this.id = 0;
      this.title = '';
      this.completed = false;
    }
}

export interface StateModel {
    todos: TodoModel[]
  }
