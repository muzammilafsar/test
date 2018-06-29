import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';  
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  login: boolean = true;
  signupForm: FormGroup;
  loginForm: FormGroup;
  registeredsuccess : boolean = false;
  alreadyregistered: boolean = false;
  loginErrorMsg = '';
  constructor(private api : ApiService, private socialAuthService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name' : new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'mobile' : new FormControl('', [Validators.required]),      
      'password' : new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(50)]),
      'password2' : new FormControl('', Validators.required)
    })
    this.loginForm = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('', Validators.required)
    });
  }

  


  loginUser() {
    console.log(this.loginForm.valid);
    this.api.post('/login',{email: this.loginForm.value.email, password: this.loginForm.value.password})
    .subscribe(val => {
      if(val['status']===200) {
        this.loginErrorMsg = 'hurray';
      } else if(val['status']===201) {
        this.loginErrorMsg = 'Email not verified';
      }else if(val['status'] === 400) {
        this.loginErrorMsg = 'Internal Server Error';
      } else if(val['status'] === 402) {
        this.loginErrorMsg = 'UserName / Password is incorrect';
      } else if(val['status'] === 401) {
        this.loginErrorMsg = 'Email not registered';
      }
    })
  }
  signupUser() {
    this.alreadyregistered = false;
    this.registeredsuccess = false;
    let form = this.signupForm.value;
    console.log("signup");
    if(this.signupForm.valid && form.password === form.password2) {
      this.api.post('/registeruser', {name: form.name, email: form.email, mobile: form.mobile, password: form.password}).subscribe(val => {
        if(val['status'] === 200) {
          console.log("valid"); 
          this.registeredsuccess = true;
          this.signupForm.reset();
        } else if(val['status'] === 400) {
          this.alreadyregistered = true;
        }
      });

    } else {
      this.signupForm.controls.name.markAsTouched();    
      this.signupForm.controls.email.markAsTouched();
      this.signupForm.controls.mobile.markAsTouched();    
      this.signupForm.controls.password.markAsTouched();
      this.signupForm.controls.password2.markAsTouched();
    }
  }
  reset() {
    this.signupForm.reset();
    this.loginForm.reset();
    this.login = true;
    console.log('reset');

  }


  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        localStorage.setItem('auth', JSON.stringify(userData));        
        // this.apiService.setLogin();
        location.reload();
      }
    );
    
  }
}
