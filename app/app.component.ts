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

    create(event, input: HTMLInputElement){
      event.preventDefault();
        let todo: Todo = new Todo(input.value);

        this.todos.push(todo);
        input.value = "";
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