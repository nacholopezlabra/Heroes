import { Component } from '@angular/core';
export class heoresComponent{
  
    @Component({
      selector: './heroes-component',
      templateUrl: './heroes.component.html'
    })
      title: string ="contador app";
      heroes: string[] = [
        "Iron Man",
        "Spiderman",
        "Thor",
        "Hulk",
        "Black Widow",
        "Hawk Eye"
    ];
     numbers: number[] = [1,2,3,4,5];
     

 
      }
    
    
