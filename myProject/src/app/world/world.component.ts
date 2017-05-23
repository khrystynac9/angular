//world.component.ts

import {Component, OnInit} from '@angular/core';
export class Phrase {
  value: string;
  language: string;
}

const PHRASES: Phrase[] = [
  {value: "Hloo", language: "English"},
  {value: "Привіт", language: "Ukraine"}
];

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  list: Phrase[] = PHRASES;
  selectLang: string;

  onSelect(selected: Phrase) {
    this.selectLang= selected.language;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
