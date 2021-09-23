export default class TodoModel {
    Name: string;
    IsCompleted: boolean;
  
    constructor() {
      this.Name = '';
      this.IsCompleted = false;
    }
  }

export interface StateModel {
    todos: TodoModel[]
  }
  