import {Component,Input} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweetlist',
    template: `<ul>
                <li *ngFor="#thetweet of tweetList">
                  <tweet [tweetData]="thetweet" ></tweet> 
                </li>
              </ul>`,
    styles:[``],
    providers: [TweetService],
    directives:[TweetComponent]
        
})
export class TweetListComponent{
 
 
 tweetList;
  
 constructor(tweetService: TweetService){
 
   this.tweetList = tweetService.getTweets();
   console.log(this.tweetList);
     
 }
  
};