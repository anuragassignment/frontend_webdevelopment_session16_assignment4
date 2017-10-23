// routing configuration file

import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './list/user/user.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { MemberComponent } from './member/member.component';
import { RegistrationGuardService } from './registration/registration-guard.service';
import { ResolveService } from './registration/resolve.service';


// path defined and assigned components accordingly along with default and wildcard routes
export const appRoutes: Routes = [
    { path: 'registration',
      component: RegistrationComponent,
      canDeactivate: [RegistrationGuardService],
      resolve: {course: ResolveService }
     },
    { path: 'users/:id/:name', component: UserComponent },
    { path: 'users', component: ListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'member', component: MemberComponent, canActivate: [AuthGuardService] },
    { path: '', component: HomeComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

export const appRouting = RouterModule.forRoot(appRoutes);