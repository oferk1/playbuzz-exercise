import { Component, OnInit } from "@angular/core";
import { HeaderStore } from "./state/header.store";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private headerStore: HeaderStore) {
    }

    ngOnInit() {

        this.headerStore.criteriaObservable.subscribe(
            criteria => console.log(`criteria: ${criteria}`)
        );

    }

}
