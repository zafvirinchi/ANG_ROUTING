import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-routing';

  constructor(){

  }

  ngOnInit(): void {
    
    const obstest$ = new Observable(observer=>{
      observer.next('Returned From Observable');
      observer.next('This is second statement');
      setTimeout(()=>{
        observer.next('This is from Time out function');
      },2000);
      observer.next('This is third statement');   //observable is returning multiple statement where simple javascript 
                                                       //is returning single statement
    }).subscribe(value=>{
      console.log(value);
      
    });

    const obstest = function(){
        return 'ObTest function';
        return 'ObTest function second'; // executing single statement
    }

    const returnData = obstest();
    console.log(returnData);
    
  }
  
}
