import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-fanny', 
    templateUrl: './fanny.component.html',
    styleUrls: ['./fanny.component.css']

    
  }) 
  
export class FannyComponent implements OnInit {

  public load: boolean;
 
  constructor(){
    this.load = false;
  }
 
  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 5000);
  }
 
}
