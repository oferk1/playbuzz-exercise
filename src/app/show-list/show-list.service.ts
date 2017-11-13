import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ShowListService {

    BASE_URL: string = '';

    constructor(private http: Http) {
    }

    getVideos(filtersList: string): Observable<any> {
        if (filtersList === '') {
            return Observable.of([]);
        }

        const url = `/api?filter=${filtersList}`;
        return this.http.get(url)
            .map(res => res.json())
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }
}
