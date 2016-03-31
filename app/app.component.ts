import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavouriteComponent} from './favourite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
               <courses></courses>
               <authors></authors>
               <favourite></favourite> <br>
               <like></like>
               <voter (vote)="onVote($event)" [nVotes]="13" ></voter>`,
               
    directives:[CoursesComponent,AuthorsComponent,FavouriteComponent,LikeComponent,VoterComponent]
    
})    
export class AppComponent { 
    
    
    onVote($event){
        
        console.log($event);
        
    }
    
}