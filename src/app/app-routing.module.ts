import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'users', component: TestComponent },
  { path: '', component: LoginComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
