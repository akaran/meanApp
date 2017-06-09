import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoggingService {
  constructor(private _http : Http) { }

  getData(){
  	return this._http.get("https://ss-angular.firebaseio.com/.json").map(
  		(response)=>response.json())
  }

  login(username: string, password: string) {
      console.log('username ::',username);
      console.log('password ::',password);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
