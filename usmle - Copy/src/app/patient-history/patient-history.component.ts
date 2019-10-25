import { Component, OnInit,OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {PatientDetails,Dialog_1 } from '../patient-details';
import { Routes, RouterModule } from '@angular/router';

// import {jQueryToken} from '../jquery-count-line.service'
// import * as $ from 'jquery';
// import { HeroModule } from '../-hero/-hero.module';
// import {KeyboardComponent} from '../app.component'

// @Input()
// routerLink: string | any[]

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})




export class PatientHistoryComponent implements OnInit {
  history:boolean;
  Linecount:any;
  texts: any;

  key: string;
  event: KeyboardEvent;

  myTime = setInterval( function() {
    var d = new Date();
    this.texts =  d.toLocaleTimeString();
    
  },1000);
  addrow1(){
    this.row = document.createElement('input');
    this.row.classList.add("form-control-11");
    this.row1 = document.createElement('input');
    this.row1.classList.add("form-control-1","form-control");
    document.getElementById("di_input_of_11_add").appendChild(this.row1);

    document.getElementById("di_input_of_21_add").appendChild(this.row); 
  }
  addrow2(){
    this.row = document.createElement('input');
    this.row.classList.add("form-control-11");
    this.row1 = document.createElement('input');
    this.row1.classList.add("form-control-1","form-control");
    document.getElementById("di_input_of_12_add").appendChild(this.row1);

    document.getElementById("di_input_of_22_add").appendChild(this.row); 
  }
  addrow3(){
 
    this.row1 = document.createElement('input');
    this.row1.classList.add("form-control-1","form-control");
    document.getElementById("di_input_of_3_add").appendChild(this.row1);

    
  }
row:any;
row1:any;
  addrow(){
    this.row = document.createElement('input');
    this.row.classList.add("form-control-11");
    this.row1 = document.createElement('input');
    this.row1.classList.add("form-control-1","form-control");
    // this.row1.className ";
    // for(let i=0;i<=2;)
    // var rowInput =` <input type="text"class="form-control-1 " maxlength="100" id="di_input_of_1"/>`
    // document.getElementById("di_input_of_1_add").innerHTML = rowInput;
    
    document.getElementById("di_input_of_1_add").appendChild(this.row1);

     document.getElementById("di_input_of_2_add").appendChild(this.row); 
  }
  focusnextrow(){
    // document.getE.activeElement
  }

  onKeyPress(event: KeyboardEvent): void {
    // this.key = event.key;
    
      // var lines = document.getElementById('ta');
      // lines.value;
      // split("\n");
      // if(this.Linecount >=15){
      // for (var i = 0; i < lines.length; i++) {
      //   if (lines[i].length <= 16) continue;
      //   var j = 0; space = 16;
      //   while (j++ <= 16) {
      //     if (lines[i].charAt(j) === " ") space = j;
      //   }
      //   lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
      //   lines[i] = lines[i].substring(0, space);
      // }
      
      
    
  }

  onEvent(event: KeyboardEvent): void {
    this.event = event;
  }


 
 
      // if ($(this).scrollTop() > 120) {
      //   $("header").addClass("test");
      // }else {
      //   $("header").removeClass("test");
      // }

  textchg(ta){
    console.log("kasjnsajsa",ta)
    // check new line
    // if it's inc line count 
    // define var linecount 
    ta.value.split
    // last value of char ( if it's \n
    // lessthan 15
    // else continue
    // r
    var numberOfLines;
    var calculateContentHeight = function( ta, scanAmount ) {
      var origHeight = ta.style.height,
          height = ta.offsetHeight,
          scrollHeight = ta.scrollHeight,
          overflow = ta.style.overflow;
      /// only bother if the ta is bigger than content
      if ( height >= scrollHeight ) {
          /// check that our browser supports changing dimension
          /// calculations mid-way through a function call...
          ta.style.height = (height + scanAmount) + 'px';
          /// because the scrollbar can cause calculation problems
          ta.style.overflow = 'hidden';
          /// by checking that scrollHeight has updated
          if ( scrollHeight < ta.scrollHeight ) {
              /// now try and scan the ta's height downwards
              /// until scrollHeight becomes larger than height
              while (ta.offsetHeight >= ta.scrollHeight) {
                  ta.style.height = (height -= scanAmount)+'px';
              }
              /// be more specific to get the exact height
              while (ta.offsetHeight < ta.scrollHeight) {
                  ta.style.height = (height++)+'px';
              }
              /// reset the ta back to it's original height
              ta.style.height = origHeight;
              /// put the overflow back
              ta.style.overflow = overflow;
              return height;
          }
      } else {
          return scrollHeight;
      }
  }
  var calculateHeight = function() {
    // debugger;
      var ta = document.getElementById("ta"),
          style = (window.getComputedStyle) ?
              window.getComputedStyle(ta) : document.getElementById("ta").style,
          // This will get the line-height only if it is set in the css,
          // otherwise it's "normal"
         taLineHeight = parseInt(style.lineHeight, 10),
          // Get the scroll height of the textarea
          taHeight = calculateContentHeight(ta, taLineHeight);
          // calculate the number of lines
          // numberOfLines = Math.ceil(taHeight / taLineHeight);
          numberOfLines = Math.floor(taHeight / taLineHeight);
          // [Math.floor(Math.random()*ta.value.length)]
          
            
  }
  
  calculateHeight();
   
  if(numberOfLines >= 16){
    // document.getElementById("lines").innerHTML = "you reached the line limit";
    console.log(this.myTextcommants,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnn");

    // alert("your are reached line limit or character limit");
    // var char = document.getElementById('ta').innerText;
    // char.value
    
    if(parseInt(ta.myText.value.split(/\n/g).length,10) >=3){
      ta.myText.value = ta.myText.value.join('\n'," ");
    }else{
      return false;
    }

  
  }else{
    
    document.getElementById("lines").innerHTML = "Line : " + numberOfLines +"/15";
    // this.texts = ta.target.value
    this.Linecount = numberOfLines;
    
    console.log(this.Linecount);
  }
  
    // debugger;
  if (ta.addEventListener) {
      // debugger;
      ta.addEventListener("mouseup", calculateHeight, false);
      ta.addEventListener("keyup", calculateHeight, false);
      // ta.addEventListener("keydown", calculateHeight, false);
  } else if (ta.attachEvent) { // IE
      ta.attachEvent("onmouseup", calculateHeight);
      ta.attachEvent("onkeyup", calculateHeight);
      ta.attachEvent("onkeydown", calculateHeight);
  }

}
constructor() { }
myTextcommants = "";
disableTextbox =  true;
limitText(ta) {
  // var ta= document.getElementById('ta'),
  var code = ta.keyCode;
  if(this.Linecount >= 15 && code != 8)
  {
      
      return false;
  }
      var count= ta.myTxt.value.length,
      // ml= ta.myTxt.getAttribute('maxlength'),
      ml = document.getElementById('ta').getAttribute('maxlength'),
      remaining= parseInt(ml,10) - count,
      cc= document.getElementById('lines');
    console.log(remaining);
  if(remaining <= 0) {
    cc.innerHTML = ml+' character limit reached.' ;
    // ta.myTxt.value = ta.myTxt.value.slice(0, 950);
 
  } else if(remaining) {
    cc.innerHTML = ml+' character limit, ' + remaining  + ' remaining.';
  } else {
    // cc.innerHTML = '';
  }
}
textenable(){
  console.log(this.disableTextbox,"sertgy");
  this.disableTextbox = !this.disableTextbox;
  var x = document.getElementById('ta').innerText ;
  
  
}
ngOnInit() {
  // document.getElementById('ta')
  // console.log(this.myTextcommants)
//   $(document).ready(function(){
//     $("button").click(function(){
//         var div = $("div");  
//         div.animate({left: '100px'}, "slow");
//         div.animate({fontSize: '5em'}, "slow");
//     });
// });
// this.productForm = this.log.group({
//   title: [],
//   selling_points: this.log.array([this.log.group({point:''})])
// })
// }

  }
  dialogbox_1:Dialog_1 
 
  Patient:PatientDetails = 
    {
      USMLE_ID:"0-123-456-7",
      name :"Jane Doe",
      Room_Number : 2,
      Badge_ID:	2,
      Encounter:1
    }
}

  //  var text = val.length + (val.split("\n").length);
    // var text = val;//(val.match(/\n/g)||[]).length;
  //It will split when new lines enter
  //  var lines = text.split(/\r|\r\n|\n/gm,15); 
  //var text = val.replace( /[\r\n]+/gm, "" ).length;
  // //////////////////////
  // console.log(val.length,"vallength")
  // let wordcount = val.split( " ").length
  // let lineHeight = document.getElementById("myTxt").scrollHeight;
  // if ((lineHeight >= 26 && lineHeight <=52)) {
  //   let counts =+ 1;
  //   console.log(counts,"counts")
  // }
  // console.log(val.length,"vallength",wordcount,lineHeight)
  // if (wordcount == 15 || wordcount == 30) {
  //   console.log("1aksdoaksdn")
  // }
  // var count = val.split(/\r\n|\n|\r/g).length;
  // if(count==15){
  //   // readonly="readonly";
  //   document.getElementById
  //   console.log('you reached line limit');
  // }else{
  //   console.log('you  line limit!!!!!!!!111');
  // }
  // // var text1 = val.split("\r").length;
  // // var count = val.match(/\n/).length 
  //  console.log(count);
  ////////////

// removeline(event){
//   var trim = event.match("\n").length
//   if(trim == 3 ){
//     return event.replace("\n"," ");
//   }
// }

  // showlist(event){
  //   console.log(event);
  // // }
  // saverange(events) {
  //   console.log("1");
  //   var list = "1";
  //   return list;
  // }
  //   // var text = value.length;
    // if(text > text-1){
    //   var key = 1;
    // return console.log(key);
    // }

