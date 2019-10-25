import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ExamineeNoteComponent } from './examinee-note/examinee-note.component';
// import { PhysicalExamineeComponent } from './physical-examinee/physical-examinee.component';

export const appRoutes: Routes = [
  { path: '.Patient Note',
    component:  PatientHistoryComponent 
  },
  {
    path: 'Examinee Instructions',
    component:  ExamineeNoteComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RouterConfigModule { }
