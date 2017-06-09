import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //https://material.angular.io/components/component/checkbox

    model: any = {
    username: "arupk",
    password: "akaran",
    rememberMe: true
  };
    //model: any = {};
    loading = false;
    returnUrl: string;
rowdata =[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
        
        ) { }


   ngOnInit() {
        // reset login status
       // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;        
        this.authenticationService.login(this.model.username, this.model.password).subscribe( (responsData) => this.rowdata=responsData);

        //this.authenticationService.login(this.model.username, this.model.password);
          /*.subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });*/
    }
}
