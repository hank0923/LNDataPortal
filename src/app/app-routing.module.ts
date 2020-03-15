import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardOverviewComponent } from './pages/dashboard-overview/dashboard-overview.component';
import { DashboardMydashboardComponent } from './pages/dashboard-mydashboard/dashboard-mydashboard.component';

const routes: Routes = [
	{path: '', redirectTo: 'dashboard/overview', pathMatch: 'full' },
	{path: 'dashboard', component: DashboardComponent,
		children: [
		     {path: '', redirectTo: 'overview', pathMatch: 'full'}, 
		     {path: 'overview', component: DashboardOverviewComponent}, 
		     {path: 'my-dashboard', component: DashboardMydashboardComponent}
		 ]
	}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
