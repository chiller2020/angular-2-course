import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
              <div (click)="onClick()" class="glyphicon" [class.glyphicon-star]="getClicked()" [class.glyphicon-star-empty]="getNotClicked()" ></div>
              `
        
})
export class FavouriteComponent{
 
 isClicked = false;
 
 
 onClick(){
 
   if(this.isClicked == false)
   {
    this.isClicked =true;
   }
   else
   {
         this.isClicked =false;
       }
 }
 
 getClicked()
 {
     return this.isClicked;
 }
 
 getNotClicked()
 {
       return (!this.isClicked);
 }
 
 
};