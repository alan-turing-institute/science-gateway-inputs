import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CaseInfo} from './case/caseInfo';
import { environment } from '../../environments/environment';


@Injectable()
export class CasesService {
  // private templateUrl = require('../../assets/case_types.json');
  // private templateUrl = 'http://localhost:5000/api/cases';
  private templateUrl = environment.apiUrl+"cases";
  constructor (private http: Http) {}

  cases = this.getCases()

  getCases(): Observable<CaseInfo[]>{
    return this.http.get(this.templateUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response){
    let body = res.json();
    return body.cases || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
