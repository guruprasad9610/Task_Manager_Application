import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { HelpComponent } from './MyComponents/help/help.component';
import { ContactComponent } from './MyComponents/contact/contact.component';


const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: "contact", component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
