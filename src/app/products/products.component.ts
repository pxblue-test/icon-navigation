import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name='Products';

  products: {
    name:string;
  }[] =[
    {name: "Product 1"},
    {name: "Product 2"},
    {name: "Product 3"}
  ];
  selectedOptions: string[] = ['Product 3'];

  constructor() { }

  ngOnInit() {
  }

  onChange(e:any){
    console.log('on change:', e);
  }

}