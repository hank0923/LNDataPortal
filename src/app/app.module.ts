import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ANT 
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';

//Loading
import { NgxLoadingModule, ngxLoadingAnimationTypes  } from 'ngx-loading';

//d3
import * as d3 from 'd3';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

//pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuidecardComponent } from './pages/guidecard/guidecard.component';
import { UserPatternComponent } from './pages/user-pattern/user-pattern.component';

//directives
import { FullscreenDirective } from './directives/fullscreen.directive';

//services
import { LayoutCommunicationService } from './services/layout-communication.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LayoutComponent,
    FullscreenDirective,
    GuidecardComponent,
    UserPatternComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(255,255,255,0.5)', 
      primaryColour: '#f48024', 
      secondaryColour: '#ffeed3', 
      fullScreenBackdrop: false,
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LayoutCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
