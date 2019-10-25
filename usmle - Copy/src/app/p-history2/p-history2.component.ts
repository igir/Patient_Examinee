import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-history2',
  templateUrl: './p-history2.component.html',
  styleUrls: ['./p-history2.component.css']
})
export class PHistory2Component implements OnInit {

   getLines(txtArea){
    var lineHeight = parseInt(txtArea.style.lineHeight.replace(/px/i,''));  
    var tr = txtArea.createTextRange();
    return Math.ceil(tr.boundingHeight/lineHeight);
  }
//   myForm.myText = name of the textarea 
// myForm.myChars = name of the field where we display the actual number of characters 
// myForm.myLines = name of the field where we display the actual number of lines
 
//  checkLimits(txtArea,countChars,countLines){
//   var maxLines = txtArea.rows;
//   var maxChars = txtArea.rows * txtArea.cols; 
//   countChars.value = txtArea.value.length;
//   countLines.value = getLines(txtArea);
//   document.myForm.maxLines.value = maxLines;
//   document.myForm.maxChars.value = maxChars;
//   if((txtArea.value.length >= maxChars || getLines(txtArea) >= maxLines) 
//     && (window.event.keyCode == 10 || window.event.keyCode == 13)) 
// { 
//     while(getLines(txtArea) > maxLines) 
//       txtArea.value = txtArea.value.substr(0,txtArea.value.length-2); 
//     while(txtArea.value.length > maxChars) 
//       txtArea.value = txtArea.value.substr(0,txtArea.value.length-2); 
//     alert("chars and / or lines limit reached"); 
// }
// else if(txtArea.value.length > maxChars ) 
// { 
//     while(txtArea.value.length > maxChars) 
//     { 
//       txtArea.value = txtArea.value.substr(0,txtArea.value.length-1); 
//     } 
//     alert("chars limit reached"); 
// }
// else if (f (countLines.value > maxLines) 
// { 
//     while(countLines.value > maxLines) 
//     { 
//       txtArea.value = txtArea.value.substr(0,txtArea.value.length-1); 
//     } 
//     alert("lines limit reached"); 
// }
// countChars.value = txtArea.value.length; 
// countLines.value = getLines(txtArea); 

// }
  constructor() { }

  ngOnInit() {
  }

}
