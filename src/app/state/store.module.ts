import { NgModule } from "@angular/core";
import { HeaderStore } from "./header.store";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        HeaderStore,
    ],
})
export class StoreModule {

}
