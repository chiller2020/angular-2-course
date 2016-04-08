import {Component} from 'angular2/core';


@Component({
  templateUrl: `app/subscription-form.component.html`,
  selector: 'subscription-form'
})
export class SubscriptionFormComponent {

  frequencies = [
    { id: 1, label: 'Daily' },
    { id: 2, label: 'Weekly' },
    { id: 3, label: 'Monthly' }
  ];
  
  onSubscribe(form){
    
    console.log(form);
  }

}