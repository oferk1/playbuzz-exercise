import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-show-facebook',
    styleUrls: ['show-video.component.scss'],
    templateUrl: 'show-video.component.html'
})
export class ShowVideoComponent {

    @Input() show: any;

    @Output() showSelected = new EventEmitter<any>();

    constructor() {

    }

    selectShow() {
        this.showSelected.emit(this.show);
    }
}
