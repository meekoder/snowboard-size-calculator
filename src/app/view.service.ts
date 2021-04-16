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
    console.log(idx)
    this.viewIdx = idx;
  }

  getIdx(cb: any): void {
    cb(this.viewIdx);
  }
}
