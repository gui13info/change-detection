import { Component, OnInit } from '@angular/core';

import { ChangeDetectionService } from 'src/app/service/change-detection.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private changeDetectionService: ChangeDetectionService) { }

  ngOnInit(): void {
  }

  public get value(): string {
    return this.changeDetectionService.value;
  }

  public newValue(value: string): void {
    this.changeDetectionService.value = value;
  }

}
