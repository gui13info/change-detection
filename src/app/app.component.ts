import { Component } from '@angular/core';

import { ChangeDetectionService } from './service/change-detection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private changeDetectionService: ChangeDetectionService) {}

  public get value(): string {
    return this.changeDetectionService.value;
  }

  public newValue(value: string): void {
    this.changeDetectionService.value = value;
  }
}
