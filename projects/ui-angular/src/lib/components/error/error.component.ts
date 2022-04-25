import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kf-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() title: string = '';
  @Input() error$!: BehaviorSubject<boolean>;
  constructor() { }

  ngOnInit() {
  }

}
