import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  onChange() {
    myTest();
  }
  title = 'usmle';
  show="false";
  mins = 2;
  secs = this.mins * 60;
  minutes;//calculate the seconds 
  seconds;


    //countdown function is evoked when page is loaded 
  
     
  //Decrement function decrement the value. 

myTimer ="";
 countdown = ()=> {
   setTimeout(()=>{
     this.Decrement()
   },100)
 }
  
  Decrement() 
      {            
      if (document.getElementById) { 
          this.minutes = document.getElementById("minutes"); 
          this.seconds = document.getElementById("seconds"); 

          //if less than a minute remaining 
          //Display only seconds value. 
          if (this.seconds < 59) { 
            this.seconds.value = this.secs; 
          } 

          //Display both minutes and seconds 
          //getminutes and getseconds is used to 
          //get minutes and seconds 
          else { 
              this.minutes.value = this.getminutes(); 
              this.seconds.value = this.getseconds(); 
          } 
          //when less than a minute remaining 
          //colour of the minutes and seconds 
          //changes to red 
          if (this.mins < 1) { 
              this.minutes.style.color = "red"; 
              this.seconds.style.color = "red"; 
          } 
          //if seconds becomes zero, 
          //then page alert time up 
          if (this.mins < 0) { 
              alert('time up'); 
              this.minutes.value = 0; 
              this.seconds.value = 0; 
          } 
          //if seconds > 0 then seconds is decremented 
          else { 
              this.secs--; 
              setTimeout('Decrement()',1000); 
          } 
      } 
  } 

getminutes() { 
      //minutes is seconds divided by 60, rounded down 
      this.mins = Math.floor(this.secs / 60); 
      return this.mins; 
  } 

 getseconds() { 
      //take minutes remaining (as seconds) away  
      //from total seconds remaining 
      return this.secs - Math.round(this.mins * 60); 
  } 
//////////////////////////////////////////////////////////////////
  element = document.getElementById('exampleDiv');
  // this.element.class = 'example-class';
//........changing class......................
//  tggle = () => { 
   
//     document.getElementById("Patient_header")
//    }

//   }

  // myFunction() {
  //   var element = document.getElementById("Patient_header");
  //   if(element.scrollTop >200){
  //   element.classList.add("Patient_header1");
  //   }else{
  //     element.classList.remove("Patient_header1"); 
  //   }
  // }
  // renderer.listenGlobal('window', 'scroll', (event) => {
  //   let number = this.document.body.scrollTop;
  
  //   this.addShrinkClass = number > 150;
  // });
  ngOnInit() {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50 ) {
          $("main").addClass("Patient_header1");
        } else {
          $("main").removeClass("Patient_header1");
        }
      });
    });
  }
  
  ///////////////////////////////////////////////////
  
  
  
 


  
}

