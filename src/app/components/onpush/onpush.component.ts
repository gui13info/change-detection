import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ChangeDetectionService } from 'src/app/service/change-detection.service';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {

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
