
import { Component, OnInit } from '@angular/core';
import {checkboxGroups, checkedIds} from './components';
import { formInputDto } from './ui-config/data/form';
import { formsJson } from './ui-config/json/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  _checkboxGroups = checkboxGroups;
  checkedId = 1;
  textValue = 4;
  dateValue = null;

  formsJsonData = formsJson;
  formInputData = formInputDto;

  ngOnInit(): void {

  }


  click(data: any) {
    console.log(666, this._checkboxGroups)
  }
}
