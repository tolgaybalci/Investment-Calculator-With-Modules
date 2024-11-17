import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultComponent } from "./investment-results/investment-result.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultComponent
    ],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})

export class AppModule {}