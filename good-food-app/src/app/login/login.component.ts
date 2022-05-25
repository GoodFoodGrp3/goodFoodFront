import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { User } from '../models/user';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../services/login-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loading = false;
  submitted = false;
  returnUrl?: string;
  errorLogin: any;
  connexionForm!: FormGroup;
  errorConnection= false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  userTest: User = {
    id: "1",
    username: "lol",
    password: "lol",
    firstName: "lol",
    lastName: "lol"

  }

  ngOnInit() {
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1)
    {
        this.router.navigateByUrl('/profile');
    }
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: [/* '', [Validators.required, Validators.email] */],
        password: [
          '',
          [
           /*  Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40) */
          ]
        ],
      },
    );
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value + " DATA")
    this.loginService.CheckUser(this.form.value).subscribe
    ({
      next: (data: any) =>
      {
        console.log(JSON.stringify(data), + " Voici la data de la connexion")
        sessionStorage.setItem('token',data['token']);
        window.location.reload();
      },
      error: (error: any) =>
      {
        this.errorLogin = error.error.details;
        this.errorConnection = true;
      }
    }
    );
  }
}