import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoryComponent } from "./category/category.component";
import { DigitCounterComponent } from "./digit-counter/digit-counter.component";
import { RatingComponent } from "./rating/rating.component";
import { RateCriteriaComponent } from "./rate-criteria/rate-criteria.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DigitCounterComponent,
    RatingComponent,
    RateCriteriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    LoggerModule.forRoot({
      //serverLoggingUrl: "",
      level: NgxLoggerLevel.OFF,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
