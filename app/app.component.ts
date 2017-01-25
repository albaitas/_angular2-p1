import { Component } from "@angular/core";

const todos = [
    'Mokytis javaScript',
    'Mokytis Angular 2',
    'Sukurti svetainæ'
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
}