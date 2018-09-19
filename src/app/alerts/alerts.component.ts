import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  name='Alerts';

  alerts: {
    name:string;
  }[] =[
    {name: "Alert 1"},
    {name: "Alert 2"},
    {name: "Alert 3"}
  ];
  selectedOptions: string[] = ['Alert 3'];

  constructor() { }

  ngOnInit() {
  }

  onChange(e:any){
    console.log('on change:', e);
  }

}