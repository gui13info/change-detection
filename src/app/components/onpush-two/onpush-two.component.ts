import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ChangeDetectionService } from 'src/app/service/change-detection.service';

@Component({
  selector: 'app-onpush-two',
  templateUrl: './onpush-two.component.html',
  styleUrls: ['./onpush-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushTwoComponent implements OnInit {

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
