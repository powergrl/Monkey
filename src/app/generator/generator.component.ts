import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  text;
  wordLength;

  constructor() { }

  ngOnInit() {
    this.text = '';
    this.wordLength = '4';
  }

  onRandomClick() {
    for(var i = 0; i < 4; i++) {
      
    }
    this.text = "random";
  }
  onSingleClick() {
    this.text = "single";
  }
  onDoubleClick() {
    this.text = "double";
  }
  onTripleClick() {
    this.text = "triple";
  }

}
