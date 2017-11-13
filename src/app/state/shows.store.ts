import { Injectable } from "@angular/core";

@Injectable()
export class ShowsStore {

    // don't expose the subject directly to store clients, instead we expose an observable.
    // This is to prevent the service clients from themselves emitting store values directly
    // instead of calling action methods, and therefore bypassing the store.

    private showsSubject: [{}];

    public set shows(shows: [{}]) {
        this.showsSubject = shows;
    }

    public get shows(){
        return this.showsSubject;
    }

}
