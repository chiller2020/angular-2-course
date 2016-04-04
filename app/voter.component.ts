import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    template: `<div><i (click)="onClickUp()" class="glyphicon glyphicon-menu-up" [class.highlighted]="isClickedUp"></i></div>
              <div>{{nVotes}}</div>
              <div><i (click)="onClickDown()" class="glyphicon glyphicon-menu-down" [class.highlighted]="isClickedDown"></i></div> `,
    styles: [`.highlighted{color: yellow}`]

})
export class VoterComponent {

    isClickedDown = false;
    isClickedUp = false;
    @Input() nVotes = 10;
    @Output() vote = new EventEmitter();


    onClickUp() {

        //handle click up reset clicked down
        if (this.isClickedDown == true) {
            this.isClickedDown = false;
            this.nVotes++;
        }
        else if (this.isClickedUp == false) {
            this.isClickedUp = true;
            this.nVotes++;
        }

        this.vote.emit({ voteCount: this.nVotes });

    }

    onClickDown() {

        //handle click down reset clicked up
        if (this.isClickedUp == true) {
            this.isClickedUp = false;
            this.nVotes--;
        }
        else if (this.isClickedDown == false) {
            this.nVotes--;
            this.isClickedDown = true;
        }
        this.vote.emit({ voteCount: this.nVotes });
    }


};