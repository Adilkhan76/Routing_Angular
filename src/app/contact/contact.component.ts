import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public GBDATA: any;

  constructor() { }

  ngOnInit(): void {
  }

  getData(data:NgForm){
    this.GBDATA=data
    console.log(data)
  }

}
