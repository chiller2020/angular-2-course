import {Component,Input} from 'angular2/core'

@Component({
    selector: 'like',
    template: `<i (click)="onClick()" class="glyphicon glyphicon-heart" [class.clicked]="getClicked()" [class.notclicked]="getNotClicked()" ></i>
                <span>{{nLikes}}</span> `,
    styles:[`.clicked{ color:deeppink; cursor:pointer }
             .notClicked{color:#cccc;cursor: pointer}`] 
        
})
export class LikeComponent{
 
 @Input() isClicked = false;
 @Input() nLikes = 9;
 
 
 onClick(){
 
   if(this.isClicked == false) 
   {
    this.isClicked =true;
    this.nLikes++;
   }
   else
   {
         this.isClicked =false;
         this.nLikes--;
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