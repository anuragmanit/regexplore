import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core'
//needed if we want to use animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//for exporting all material imports in one module
import {MaterialModule} from './modules/material.module';

//services
import {RegexService} from './services/regex.service';

//components
import {FormsModule} from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegexFieldComponent } from './body/regex-field/regex-field.component';
import { BodyComponent } from './body/body.component';
import { TextFieldComponent } from './body/text-field/text-field.component';

import {XRegExp} from 'xregexp';
import { FlagFieldComponent } from './body/flag-field/flag-field.component';
import { ContributorsFieldComponent } from './body/contributors-field/contributors-field.component';

import {HttpModule} from '@angular/http'; //TODO: ashishpatel0720: fix this deprecation



@NgModule({
  declarations:  [
    AppComponent,
    ToolbarComponent,
    RegexFieldComponent,
    BodyComponent,
    TextFieldComponent,
    FlagFieldComponent,
    ContributorsFieldComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [RegexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
