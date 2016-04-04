import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    templateUrl: 'app/favourite.template.html'

})
export class FavouriteComponent {

    isClicked = false;


    onClick() {

        if (this.isClicked == false) {
            this.isClicked = true;
        }
        else {
            this.isClicked = false;
        }
    }

    getClicked() {
        return this.isClicked;
    }

    getNotClicked() {
        return (!this.isClicked);
    }


};