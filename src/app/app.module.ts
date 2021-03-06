import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VisualComponent } from './visual/visual.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEchartsModule } from 'ngx-echarts';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { PriceSliderComponent } from './shared/price-slider/price-slider.component';
import { TsbSliderComponent } from './shared/tsb-slider/tsb-slider.component';
import { GameweekSliderComponent } from './shared/gameweek-slider/gameweek-slider.component';
import { MinMinutesComponent } from './shared/min-minutes/min-minutes.component';
import { PositionSelectComponent } from './shared/position-select/position-select.component';
import { TeamSelectComponent } from './shared/team-select/team-select.component';
import { YearSelectComponent } from './shared/year-select/year-select.component';
import { GraphComponent } from './graph/graph.component';
import { PlayerSearchComponent } from './shared/player-search/player-search.component';

registerLocaleData(en);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'visual', component: VisualComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisualComponent,
    PriceSliderComponent,
    TsbSliderComponent,
    GameweekSliderComponent,
    MinMinutesComponent,
    PositionSelectComponent,
    TeamSelectComponent,
    YearSelectComponent,
    GraphComponent,
    PlayerSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzSliderModule,
    NzInputNumberModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzSpinModule,
    NzButtonModule,
    NzDividerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
