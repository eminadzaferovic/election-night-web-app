import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectionFileUploadComponent } from './election-file-upload/election-file-upload.component';
import { ElectionListDataComponent } from './election-list-data/election-list-data.component';
import { ElectionListConstituencyComponent } from './election-list-data/election-list-constituency/election-list-constituency.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ElectionFileUploadComponent,
    ElectionListDataComponent,
    ElectionListConstituencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatExpansionModule,
    ToastrModule.forRoot({
      positionClass : "toast-top-center"
    })
  ],
  exports: [
    MatExpansionModule,
    MatAccordion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
