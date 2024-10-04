import { Component } from '@angular/core';
import {PuzzleDataService} from "../services/puzzle-data.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  puzzle:number[] = []

  constructor(private puzzledata:PuzzleDataService) {
  }

  ngOnInit():void {
    this.puzzle = this.puzzledata.level1Easy;
  }
}
