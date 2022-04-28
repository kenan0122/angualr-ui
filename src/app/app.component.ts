
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormConfigSchemeDto } from './ui-config/type/form';
import { checkedIds, options } from './ui-config/data/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(public http:HttpClient) {}

}
