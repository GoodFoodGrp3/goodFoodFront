import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    number: new UntypedFormControl(''),
    adress: new UntypedFormControl(''),
    postalCode: new UntypedFormControl(''),
    city: new UntypedFormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        number: ['',
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(6),
            Validators.maxLength(20)]],
        adress: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        postalCode: ['',
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(5), 
          Validators.maxLength(5),
        ],
        city: ['', Validators.required],
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
