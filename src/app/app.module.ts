import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecipeComponent } from './recipe/recipe.component';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
//exports: [NgbdCarouselConfig],

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
