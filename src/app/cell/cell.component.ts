import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() value:number = 0;
  isClicked:boolean = false;

  @HostListener('click')
  onClick() {
    this.isClicked = !this.isClicked;
  }
}
