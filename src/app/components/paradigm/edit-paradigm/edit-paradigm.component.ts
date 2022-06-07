import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { template } from '@psylab/utils';
import { BehaviorSubject } from 'rxjs';
import { formsJson1, inputDto1 } from 'src/app/ui-config/json/form1';
import { RequestService } from 'src/app/ui-config/service/request.service';
import { ErrorInfo } from 'src/app/ui-config/type/errror';

@Component({
  selector: 'app-edit-paradigm',
  templateUrl: './edit-paradigm.component.html',
  styleUrls: ['./edit-paradigm.component.scss'],
})
export class EditParadigmComponent extends RequestService implements OnInit {
  @Output() infoOuter = new EventEmitter();
  readonly error$ = new BehaviorSubject(true);

  paradigmId!: string;
  jsonData?: any;
  inputDto: any;
  infoList: any[] = [];
  errorList: ErrorInfo[] = [];

  constructor(
    private injector: Injector,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getRouteParam();
  }

  getRouteParam() {
    this.activatedRoute.params.subscribe((param) => {
      this.paradigmId = param['id'];
      this.getEditData(this.paradigmId);
    });
  }

  getEditData(id: any) {
    const url = template('/api/Paradigm/paradigms/{0}/for-edit', id);

    this.request({
      method: 'GET',
      url,
    }).subscribe((response) => {
      this.inputDto = response;
      this.getFormJson(response.moduleType);
    });
  }

  getFormJson(type: any) {
    const url = '/api/Paradigm/paradigms/form-config';

    this.request({
      method: 'POST',
      url,
      body: { modelType: type },
    }).subscribe((response) => {
      this.jsonData = response;
      // this.getEditData(response.moduleType);
    });
  }

  handleCancel(): void {
    this.route.navigate(['/app/paradigm']);
  }

  handleOk(): void {
    const url = `/api/Paradigm/paradigms/save-paradigm`;

    this.request({
      method: 'POST',
      url,
      body: this.inputDto,
    }).subscribe((response) => {
      if (response.success) {
        this.errorList = [];
        this.handleCancel();
      } else {
        this.errorList = response.error ? response.error.errorMessage : [];
      }
    });
  }

  saveForm(param: any) {
    if (param.modal) {
      this.handleOk();
    } else {
      this.handleCancel();
    }
  }
}
