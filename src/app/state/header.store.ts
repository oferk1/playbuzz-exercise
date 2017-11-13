import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HeaderStore {

private criteriaSubject: BehaviorSubject<string> = new BehaviorSubject('');

    public readonly criteriaObservable: Observable<string> = this.criteriaSubject.asObservable();

    public set criteria(criteria: string) {
        this.criteriaSubject.next(criteria);
    }

    public get criteria(): string {
        return this.criteriaSubject.getValue();
    }
}
