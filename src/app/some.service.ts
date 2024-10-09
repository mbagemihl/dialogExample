import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor() { }

  // simulate value coming from outside
  public getDummyValue() {
    return of(Math.floor(Math.random() * 10) % 2 === 1);
  }
}
