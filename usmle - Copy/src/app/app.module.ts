import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ExamineeNoteComponent } from './examinee-note/examinee-note.component';
import { PhysicalExamineeComponent } from './physical-examinee/physical-examinee.component';
import { PHistory2Component } from './p-history2/p-history2.component';
import {InjectionToken} from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { RouterConfigModule } from './router-config.module';
import { appRoutes } from './router-config.module';
export let jQueryToken = new InjectionToken('jQuery'); 

@NgModule({
  declarations: [
    AppComponent,
    PatientHistoryComponent,
    ExamineeNoteComponent,
    PhysicalExamineeComponent,
    PHistory2Component,
    DashboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
 
  
  ],
  providers: [{
    provide: jQueryToken,
    useValue: jQuery
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

