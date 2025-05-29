import { Component,ElementRef,HostListener,viewChild } from '@angular/core';

@Component({
  selector: 'app-active-companies',
  standalone: false,
  templateUrl: './active-companies.component.html',
  styleUrl: './active-companies.component.scss'
})
export class ActiveCompaniesComponent {

  issidebarvisible = false;

  toggleSidebar(){
    this.issidebarvisible = !this.issidebarvisible;
  }

  addCompany(){
    console.log('active company')
    this.issidebarvisible = !this.issidebarvisible;
  }
}
