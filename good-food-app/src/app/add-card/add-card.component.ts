import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

  expirationDate = new UntypedFormControl(moment());

  form: UntypedFormGroup = new UntypedFormGroup({
    numCard: new UntypedFormControl(''),
    userCard: new UntypedFormControl(''),
    expirationDate: this.expirationDate,
    securityCode: new UntypedFormControl(''),
    city: new UntypedFormControl(false),
  });
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder) { }
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

  setMonthAndYear(normalizedMonthAndYear: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>) {
    const ctrlValue = this.expirationDate.value;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.expirationDate.setValue(ctrlValue);
    datepicker.close();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
