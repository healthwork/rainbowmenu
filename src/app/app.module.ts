import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientXsrfModule.withOptions({cookieName: 'Csrf-Token', headerName: 'Csrf-Token'}),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
