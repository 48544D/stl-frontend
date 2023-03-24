import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
