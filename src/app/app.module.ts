import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoryComponent } from "./category/category.component";
import { DigitCounterComponent } from "./digit-counter/digit-counter.component";
import { RatingComponent } from "./rating/rating.component";
import { RateCriteriaComponent } from "./rate-criteria/rate-criteria.component";
import {environment} from "../environments/environment";

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
    NgbModule,
    HttpClientModule,
    LoggerModule.forRoot({
      disableConsoleLogging: environment.CONSOLE_LOGGING,
      //serverLoggingUrl: "",
      level: environment.LOGGER_LEVEL_DEBUG,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
