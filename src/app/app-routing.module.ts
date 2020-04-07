import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuidecardComponent } from './pages/guidecard/guidecard.component';
import { UserPatternComponent } from './pages/user-pattern/user-pattern.component';

const routes: Routes = [
	{path: '', redirectTo: 'user-pattern', pathMatch: 'full' },
	// {path: 'dashboard', component: DashboardComponent,
	// 	children: [
	// 	     {path: '', redirectTo: 'overview', pathMatch: 'full'}, 
	// 	     {path: 'overview', component: DashboardOverviewComponent}, 
	// 	     {path: 'my-dashboard', component: DashboardMydashboardComponent}
	// 	 ]
	// },
	{path: 'dashboard', component:DashboardComponent}, 
	{path: 'guidecard', component:GuidecardComponent}, 
	{path: 'user-pattern', component:UserPatternComponent}, 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
