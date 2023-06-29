import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kf-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Input() onlyShowOnHover: boolean = false;
  @Input() title: string = '上传';
  @Input() width: string = '6.5rem';
  @Input() height: string = '6.5rem';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    return true;
  }

}
