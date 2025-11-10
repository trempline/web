import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { CommonModule, DatePipe, NgClass, NgIf, SlicePipe, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [SharedModule, CommonModule, RouterModule, FormsModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
donation(){
window.open('https://www.helloasso.com/associations/tremplin-jeunes-solistes/formulaires/1', '_blank');
}
becomeMember(){
  window.open('https://www.helloasso.com/associations/tremplin-jeunes-solistes/adhesions/adhesion-a-tremplin-jeunes-solistes', '_blank');
}
goYoutube(){

}
isShowPast(id:any){

}
toggleDates(id:any){
}

expandedEvents: boolean[] = [];
submitNewsletter(){}

newsletter:any = [];
isSubmitting:any = false;


}
