import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HighlightsDirective } from './highlights.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DatePipe } from './date.pipe';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { EditusersComponent } from './editusers/editusers.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CartComponent,
    HighlightsDirective,
    DatePipe,
    HeaderComponent,
    LoginComponent,
    EditusersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,MatSlideToggleModule,MatToolbarModule,MatButtonModule,MatSidenavModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
