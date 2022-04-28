import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kf-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() title: string = '';
  @Input() info: string = '不能为空'
  @Input() error$!: BehaviorSubject<boolean>;
  constructor() { }

  ngOnInit() {
  }

}
