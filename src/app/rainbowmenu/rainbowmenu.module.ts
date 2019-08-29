import { NgModule } from '@angular/core';
import {RainbowmenuRoutingModule} from './rainbowmenu-routing-module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RainbowmenuComponent} from "./rainbowmenu.component";
import {CommonModule} from "@angular/common";
import {CategoryComponent} from "../category/category.component";
import {DigitCounterComponent} from "../digit-counter/digit-counter.component";
import {RatingComponent} from "../rating/rating.component";
import {RateCriteriaComponent} from "../rate-criteria/rate-criteria.component";
import {FormsModule} from "@angular/forms";
import {SocialsComponent} from "../socials/socials.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RainbowmenuRoutingModule,
    NgbModule
  ],
  declarations: [
    RainbowmenuComponent,
    CategoryComponent,
    SocialsComponent,
    DigitCounterComponent,
    RatingComponent,
    RateCriteriaComponent,]
})
export class RainbowmenuModule { }
