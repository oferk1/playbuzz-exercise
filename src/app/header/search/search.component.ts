import { Component, EventEmitter, Input, Output } from "@angular/core";
import { YOUTUBE_ID, URL_ID, FACEBOOK_ID} from "../../common/constants/sources";
import { reduce, filter, flow } from 'lodash/fp';


@Component({
    selector: 'app-search',
    styleUrls: ['search.component.scss'],
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    @Input()
    criteria: string;

    @Output()
    criteriaChange: EventEmitter<string> = new EventEmitter<string>();

    options = [
        { name: 'youtube', value: YOUTUBE_ID },
        { name: 'url', value: URL_ID },
        { name: 'facebook', value: FACEBOOK_ID }];

    constructor() {
    }

    doSearch() {
        const criteria = flow(
            filter('checked'),
            reduce((res, cb) => res.push(cb.value) && res, [])
        )(this.options);
        this.criteriaChange.emit(criteria);
    }

}
