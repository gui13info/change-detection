import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {
  private _value: string = 'Initial';

  constructor() { }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }
}
