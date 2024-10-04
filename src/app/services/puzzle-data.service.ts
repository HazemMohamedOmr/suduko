import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleDataService {
  level1Easy:number[] = [0,0,1,0,0,2,4,0,6,
                        6,0,0,0,0,5,0,1,8,
                        0,8,2,9,1,6,0,0,0,
                        0,0,0,8,0,4,5,0,0,
                        1,0,8,0,0,0,6,0,9,
                        0,0,0,0,0,0,8,2,7,
                        5,1,4,7,3,0,0,6,2,
                        3,0,7,2,4,0,0,0,0,
                        0,2,0,0,0,1,3,7,0];
  constructor() { }
}
