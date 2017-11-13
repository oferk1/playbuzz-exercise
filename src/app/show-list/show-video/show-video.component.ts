import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-show-video',
    styleUrls: ['show-video.component.scss'],
    templateUrl: 'show-video.component.html'
})
export class ShowVideoComponent {

    @Input() video: any;

    constructor() {
    }

}
