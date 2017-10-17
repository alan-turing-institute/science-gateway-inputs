import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

import * as urljoin from 'url-join';

@Injectable()
export class ChartService {
  //url for getting job data used to plot the graph
  private dataUrl = urljoin(environment.apiRoot, 'data')
  constructor (private http: Http) {}

  getData(): Observable<Array<any>>{
    var url = urljoin(this.dataUrl, localStorage.getItem('job_id'))
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  private extractData(res: Response){
    let body = res.json();
    let gatewayData = body.stdout;
    return gatewayData.data || { };
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
