import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RetireStaffComponent } from './pages/retire-staff/retire-staff.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';
import { ListStaffComponent } from './pages/list-staff/list-staff.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewStaffComponent } from './pages/view-staff/view-staff.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RegionComponent } from './pages/region/region.component';
import { RankComponent } from './pages/rank/rank.component';
import { EducationComponent } from './pages/education/education.component';
import { RankListComponent } from './pages/rank-list/rank-list.component';
import { RegionListComponent } from './pages/region-list/region-list.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { EditRegionComponent } from './pages/edit-region/edit-region.component';
import { EditRankComponent } from './pages/edit-rank/edit-rank.component';
import { EditEducationComponent } from './pages/edit-education/edit-education.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardComponent,
    RetireStaffComponent,
    AddStaffComponent,
    ListStaffComponent,
    ViewStaffComponent,
    RegionComponent,
    RankComponent,
    EducationComponent,
    RankListComponent,
    RegionListComponent,
    EducationListComponent,
    EditRegionComponent,
    EditRankComponent,
    EditEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
