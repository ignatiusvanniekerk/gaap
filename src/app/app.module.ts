import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { ArraySchemaColoursComponent } from './array-schema-colours/array-schema-colours.component';
import { DataChangerComponent } from './data-changer/data-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    PyramidComponent,
    ArraySchemaColoursComponent,
    DataChangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
