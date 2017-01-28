import { Component, Input } from "@angular/core";
import { Todo } from "../shared/todo";
import { TodoService } from "../shared/todo.service";


@Component({
    moduleId: module.id,
    selector: "todo-list",
    templateUrl: "todo-list.component.html",
    styleUrls: ["todo-list.component.css"]
})
export class TodoListComponent{
    @Input() todos: Todo[];
    todoService: TodoService;

    constructor(todoService: TodoService){
        this.todoService = todoService;
    }

    delete(todo: Todo){
        console.log("delete");
        let index = this.todos.indexOf(todo);
        if(index > -1){
            this.todos.splice(index, 1);
        }
    }
}