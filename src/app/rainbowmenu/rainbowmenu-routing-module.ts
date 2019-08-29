import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RainbowmenuComponent} from "./rainbowmenu.component";


const routes: Routes = [
    { path: '', component: RainbowmenuComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RainbowmenuRoutingModule { }
