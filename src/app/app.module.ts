import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const app:Routes=[{path:'',component:AddComponent},{path:'add',component:AddComponent},
                  {path:'view',component:ViewComponent},{path:'edit',component:EditComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app),
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
