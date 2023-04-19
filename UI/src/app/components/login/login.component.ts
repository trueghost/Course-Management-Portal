import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForm from 'src/app/helpers/validateform';
import { LoginServiceService } from 'src/app/services/login-service.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private auth: LoginServiceService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  hideShowPass(){
   this.isText = !this.isText;
   this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
   this.isText ? this.type = "text" : this.type = "password";
  }
  
  onLogin() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({

        next:(res:any)=>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['home']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
        
      })


    }
    else{

      validateForm.validateAllFormFields(this.loginForm)
      alert("Your form is invalid")

    }
  }

  private validateAllFormFields(formGroup:FormGroup){
    
  }

}
