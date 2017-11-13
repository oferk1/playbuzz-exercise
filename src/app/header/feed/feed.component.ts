import { Component, EventEmitter, Input, Output } from "@angular/core";
import { YOUTUBE_ID, URL_ID, FACEBOOK_ID} from "../../common/constants/sources";
import { reduce, filter, flow } from 'lodash/fp';


@Component({
    selector: 'app-search',
    styleUrls: ['feed.component.scss'],
    templateUrl: 'feed.component.html'
})
export class FeedComponent {
    @Input()
    criteria: string;

    @Output()
    criteriaChange: EventEmitter<string> = new EventEmitter<string>();

    options = [
        { name: 'youtube', value: YOUTUBE_ID, checked: true },
        { name: 'url', value: URL_ID, checked: true  },
        { name: 'facebook', value: FACEBOOK_ID, checked: true  }];

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
