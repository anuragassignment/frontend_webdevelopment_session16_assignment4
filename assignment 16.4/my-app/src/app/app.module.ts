import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Capitalize } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { InputDataService } from './services/input-data.service';
import { UserComponent } from './list/user/user.component';
import { appRouting } from './app.router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './login/auth-guard.service';
import { MemberComponent } from './member/member.component';
import { RegistrationGuardService } from './registration/registration-guard.service';
import { ResolveService } from './registration/resolve.service';
import { DropDownService } from './services/drop-down.service';
import { HttpModule } from '@angular/http';
import { HttpPostService } from './services/http-post.service';
import { HttpGetService } from './services/http-get.service';


@NgModule({
  declarations: [
    AppComponent,
    Capitalize,
    FilterPipe,
    ListComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    appRouting,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [InputDataService,
    AuthService,
    AuthGuardService,
    RegistrationGuardService,
    ResolveService,
    DropDownService,
    HttpPostService,
    HttpGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
