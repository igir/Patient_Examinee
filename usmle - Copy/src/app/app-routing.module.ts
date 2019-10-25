import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ExamineeNoteComponent } from './examinee-note/examinee-note.component';

const appRoutes: Routes = [
  { path: 'Patient Note',
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
