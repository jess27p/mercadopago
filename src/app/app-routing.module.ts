import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SuccessComponent} from './success/success.component';
import {FailComponent} from './fail/fail.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'fail', component: FailComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
