import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header.component";
import { FeedComponent } from "./feed/feed.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FeedComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}
