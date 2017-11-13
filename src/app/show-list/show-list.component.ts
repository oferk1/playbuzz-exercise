import { Component, OnInit } from "@angular/core";
import { ShowListService } from "./show-list.service";
import { HeaderStore } from "../state/header.store";
import { map, filter, flow} from 'lodash/fp';
import { first } from 'lodash';
@Component({
    selector: 'app-show-list',
    templateUrl: 'show-list.component.html',
    styleUrls: ['show-list.component.scss'],
    providers: [ShowListService],
})
export class ShowListComponent implements OnInit {

    videos = [];

    constructor(
                private headerStore: HeaderStore,
                private showListService: ShowListService) {
    }

    ngOnInit() {
        this.headerStore.criteriaObservable.subscribe(
            criteria => this.showListService.getVideos(criteria).subscribe(
                shows => {
                    const feedVideos = flow(
                        map(item => item),
                        filter(item => true)
                    )(shows);
                    this.videos = first(feedVideos);
                }
            )
        );

    }

}
