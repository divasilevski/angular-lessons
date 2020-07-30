import { AlertService } from './shared/services/alert.service';
import { AuthGuard } from './shared/services/auth.guard';
import { NgModule, Provider } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './shared/services/auth.service'
import { SharedModule } from '../shared/shared.module'
import { AlertComponent } from './shared/components/alert/alert.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
      {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
    ]}
]


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [AlertService, AuthService, AuthGuard]
})
export class AdminModule { }
