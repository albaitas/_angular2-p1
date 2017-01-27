import { Component } from "@angular/core";

class Todo{
    constructor(public title: string,
                public completed: boolean = false){}
}
const todos: Todo[] = [
    {
        title: "Mokytis JavaScript",
        completed: true
    },
    {
        title: "Mokytis Angular 2",
        completed: false
    },
    {
        title: "Sukurti svetaine",
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]

})

export class AppComponent {
    title: string = "Angular 2";
    todos: Todo[] = todos;
    newTodoTitle: string = '';

    create(event: any, title: string){
      event.preventDefault();
        let todo: Todo = new Todo(title);

        this.todos.push(todo);

    }

    toggle(todo: Todo){
        todo.completed = !todo.completed;
    }

    delete(todo: Todo){
        let index = this.todos.indexOf(todo);
        if(index > -1){
            this.todos.splice(index, 1);
        }
    }
}