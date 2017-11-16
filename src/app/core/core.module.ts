import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxingComponent } from './components/boxing/boxing.component';
import { MmaComponent } from './components/mma/mma.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'boxing', component: BoxingComponent },
      { path: 'mma', component: MmaComponent }
    ])
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BoxingComponent,
    MmaComponent        
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
