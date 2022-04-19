import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  form: FormGroup = new FormGroup({
    numCard: new FormControl(''),
    userCard: new FormControl(''),
    expirationDate: new FormControl(''),
    securityCode: new FormControl(''),
    city: new FormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        numCard: [
          '',
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        userCard: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)]
        ],
        expirationDate: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        securityCode: ['',
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(5),
          Validators.maxLength(5),
        ],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
