import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nnav',
  templateUrl: './nnav.component.html',
  styleUrls: ['./nnav.component.css']
})
export class NnavComponent implements OnInit {
  classe="alinfo"
  color="blue";
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }
changeColor(){
  this.color="red";
}
}
