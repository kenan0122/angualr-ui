import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() { }

  // selectChange(option, servicename, method) {
  //   servicename[method](param).subscribe((result)=> {
  //     // 請求成功之后, 要进行数据上报, 重新刷新列表, 把page项进行回传
  //     //
  //   })
  // }

  ngOnInit() {
  }


}
