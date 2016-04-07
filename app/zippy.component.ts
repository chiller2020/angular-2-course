import {Component,Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `<div class="zippy">
                 <div class="zippy-tytle" (click)="onClick()">
                   {{title}}
                   <i class="pull-right glyphicon" [ngClass]="{ 'glyphicon-chevron-down': !isExpanded,'glyphicon-chevron-up': isExpanded}"></i>
                 </div>
                 <div *ngIf="isExpanded" class="zippy-content">
                   <ng-content></ng-content>
                 </div>
               </div>`,
    styles:[`.zippy{ width : 300px; border: solid 2px;}`]
})
export class ZippyComponent {

    @Input() title ="Default Title";
    isExpanded = false;


    onClick() {

        this.isExpanded = !this.isExpanded;
    }

    


};