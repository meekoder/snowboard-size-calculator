import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  viewIdx: number;

  constructor() {
    this.viewIdx = 0;
  }

  setIdx(idx: number): void {
    this.viewIdx = idx;
  }

  getIdx(): number {
    return this.viewIdx;
  }

  // getIdx(cb: any): void {
  //   cb(this.viewIdx);
  // }
}
