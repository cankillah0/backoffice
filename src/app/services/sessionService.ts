/**
 * Created by me on 10.06.2017.
 */
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionService {

  private serverUrl = 'http://192.168.1.3:8080/sessions';

  constructor(private http : Http){}

  public getSessions(): Promise<Object[]>{
    return this.http
      .get(this.serverUrl).toPromise()
      .then(function(response){
        return response.json();
      })
      .catch(this.handleError);
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
    return Promise.reject(errMsg);
  }
}
