import { Component, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  urlID:any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,

  ){
    effect(() => {
       
     
    });
  }
  
  isMenuOpen: boolean = false;
  getMenuItemClass(id: number) {
    return id;
  }

  logout(){
    
  }
}
