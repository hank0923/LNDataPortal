import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ANT 
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';

//Loading
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardOverviewComponent } from './pages/dashboard-overview/dashboard-overview.component';
import { DashboardMydashboardComponent } from './pages/dashboard-mydashboard/dashboard-mydashboard.component';
import { MapComponent } from './components/map/map.component';
import { FullscreenDirective } from './directives/fullscreen.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LayoutComponent,
    DashboardOverviewComponent,
    DashboardMydashboardComponent,
    MapComponent,
    FullscreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(255,255,255,0.5)', 
      primaryColour: '#1890ff', 
      secondaryColour: 'rgba(24,144,255,0.2)', 
      fullScreenBackdrop: false,
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
