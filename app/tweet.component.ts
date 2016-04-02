import {Component,Input} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `<div class="media">
                 <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="{{tweetData.imageUrl}}" alt="placeholder">
                    </a>
                 </div>
                 <div class="media-body">
                  <h4 class="media-heading">
                    {{ tweetData.author }} <span class="tweetHandle"> {{ tweetData.tweetHandle }}</span>
                  </h4>
                   {{tweetData.tweetText}} 
                  <div>
                    <like [nLikes]="tweetData.nLikes"></like>
                  </div>                
                 </div>
               </div>`,
    styles:[`.tweetHandle{color:lightGrey}`],
     directives:[LikeComponent]
        
})
export class TweetComponent{
 
 @Input() tweetData = {author: 'TestName' , tweetHandle:'@TestHandle', tweetText :'Hello Sample Tweet schalala', imageUrl:'http://lorempixel.com/100/100/people'};  
 
 
};