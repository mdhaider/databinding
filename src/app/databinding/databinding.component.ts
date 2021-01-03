import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  pageTitle:string="Hi, from Angular databinding";
  newPageTtitle:string="I will be changed";


  changeTitle(){
    this.newPageTtitle="I am new page title";
  }
  constructor() { }

  ngOnInit(): void {
  }
}
