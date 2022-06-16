import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import Validation from '../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    addressline1: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  notGoodPassword = false;
  submitted = false;
  erroraddUser : any;
  
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,  private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  initForm(){
    //Minimum eight Characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    var testRegex = new RegExp(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/);
    this.form = this.formBuilder.group(
      {
        lastname: ['', Validators.required],
        firstname: [
          '',
          [
            Validators.required,
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        
        city: ['', [Validators.required]],
        postalCode: ['', 
                    [Validators.required, 
                    Validators.minLength(5),
                    Validators.maxLength(5)]
                  ],
        addressline1: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(new RegExp(regex))
          ]
        ],
        confirmPassword: [
           '',
           Validators.required,
          ],
        acceptTerms: [false, Validators.requiredTrue]
      },
      
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      console.log(JSON.stringify(this.form.value));
      console.log(" PASSED")
    }
       this.registerService.createCustomer(this.form.value).subscribe({
        next: data => {
          console.log("Good voici le form ==> " + this.form.value + " Voici les daatas " + data)
        //  this.router.navigateByUrl('/login');
        },
        error: error => {
          console.log(error);
          this.erroraddUser = error.error.details;
        }
      });
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
