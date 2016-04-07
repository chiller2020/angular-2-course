import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavouriteComponent} from './favourite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetListComponent} from './tweetlist.component'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'


@Component({
  selector: 'my-app',
  template: `<contact-form></contact-form>`,
  //kept to make it possible to use all templates from course on the fly
  directives: [CoursesComponent, AuthorsComponent, FavouriteComponent, LikeComponent, VoterComponent, TweetListComponent,ZippyComponent,ContactFormComponent]

})
export class AppComponent {


  onVote($event) {

    console.log($event);

  }

}


//template parts used before last challenge
/*template: `<h1>Hello Angular</h1>
               <courses></courses>
               <authors></authors>
               <favourite></favourite> <br>
               <like></like>
               <voter (vote)="onVote($event)" [nVotes]="13" ></voter>
               <tweetlist></tweetlist>
               <zippy title="My Zippy Components Title">
                 Wow im putting Some Content in here !!! 
             </zippy>`
*/