import { Component } from "@angular/core";

const todos = [
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
    title = "Angular 2";
    todos = todos;

    toggle(todo: any){
        todo.completed = !todo.completed;
    }
}