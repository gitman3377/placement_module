import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


// export const routes:any = [
//   {
//     path: '',
//     component: LoginComponent,
//     data: {
//       title: 'Login',
//       urls: [{ title: 'Home' }, { title: 'Dashboard' }]
//     },
//   }
// ]

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
