import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SortingComponent } from './sorting/sorting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringComponent,
    SortingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,


  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
