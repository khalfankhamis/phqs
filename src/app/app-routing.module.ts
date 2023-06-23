import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';
import { ListStaffComponent } from './pages/list-staff/list-staff.component';
import { ViewStaffComponent } from './pages/view-staff/view-staff.component';
import { RegionComponent } from './pages/region/region.component';
import { RankComponent } from './pages/rank/rank.component';
import { EducationComponent } from './pages/education/education.component';
import { RankListComponent } from './pages/rank-list/rank-list.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { RegionListComponent } from './pages/region-list/region-list.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[{
      path:"",
      component:DashboardComponent
    },{
      path:"add-staff",
      component:AddStaffComponent
    },
    {
      path:"list-staff",
      component:ListStaffComponent
    },
    {
      path:"view-staff/:force_number",
      component:ViewStaffComponent
    },
    {
      path:"add-region",
      component:RegionComponent
    },
    {
      path:"add-rank",
      component:RankComponent
    },
    {
      path:"education",
      component:EducationComponent
    },
    {
      path:"rank-list",
      component:RankListComponent
    },{
      path:"education-list",
      component:EducationListComponent
    },{
      path:"region-list",
      component:RegionListComponent
    },
  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
