import { Component, OnInit } from '@angular/core';
import { ALPHABET, SINGLEFREQ } from '../frequencies';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent implements OnInit {

  text; /* text inside textbox */
  wordLength; /* desired length of word */
  randomInt; /* random int to pull from alphabet array */
  alphabet = ALPHABET; /* the alphabet */
  singleFreq = SINGLEFREQ; /* The array of alphabets and single frequencies */

  constructor() { }

  ngOnInit() {
    this.text = '';
    this.wordLength = '4';
  }

  onRandomClick() {
    this.text = '';
    for(var i = 0; i < 100; i++) {
      for(var j = 0; j < this.wordLength; j++) {
        this.randomInt = Math.floor(Math.random() * (26));
        this.text += this.alphabet[this.randomInt];
      }
      this.text += ' ';
    }
  }
  onSingleClick() {
    this.text = '';
    for(var i = 0; i < 100; i++) {
      for(var j = 0; j < this.wordLength; j++) {
        this.randomInt = Math.floor(Math.random() * (10050));
        for(var k = 0; k < 26; k++) {
          if(this.randomInt < this.singleFreq[k].frequency) {
            this.text += this.singleFreq[k].letter;
            break;
          }
        }
      }
      this.text += ' ';
    }
  }
  onDoubleClick() {
    this.text = "double";
  }
  onTripleClick() {
    this.text = "triple";
  }

}
