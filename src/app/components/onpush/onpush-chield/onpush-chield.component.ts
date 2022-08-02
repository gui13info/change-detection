import { Component, OnInit } from '@angular/core';

import { ChangeDetectionService } from 'src/app/service/change-detection.service';

@Component({
  selector: 'app-onpush-chield',
  templateUrl: './onpush-chield.component.html',
  styleUrls: ['./onpush-chield.component.scss']
})
export class OnpushChieldComponent implements OnInit {

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
