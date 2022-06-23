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
    country: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    addressline1: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  });

  notGoodPassword = false;
  submitted = false;
  erroraddUser : any;
  invalid = [];
  
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
        country: ['', [Validators.required]],
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
        cpassword: [
           '',
           Validators.required,
          ],
      },
      
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  public findInvalidControls() {
    const controls = this.form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            this.invalid.push(name);
        }
    }
    console.log(this.invalid.length + "Nombre dans la liste")
    return this.invalid;
}

  onSubmit(): void {
    this.findInvalidControls()
    this.submitted = true;
    console.log(this.form.value)
    if (this.invalid.length > 0 ) {
      console.log(this.invalid)
      console.log("Don't work")
      return;
    } else {
      /* this.registerService.createCustomer(this.form.value).subscribe({
        next: data => {
          console.log("Good voici le form ==> " + this.form.value + " Voici les daatas " + data)
          this.router.navigateByUrl('/login');
        },
        error: error => {
          console.log(error);
          this.erroraddUser = error.error.details;
        }
      }); */
      console.log(JSON.stringify(this.form.value));
      console.log(" PASSED")
    }   
  }
  
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
