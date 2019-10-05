import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  personsSaved: Person[] = [];

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    // this.personForm = new FormGroup({
    //   'direcciones': new FormGroup({
    //     'address': new FormControl('')
    //   }),
    //   'name': new FormControl(''),
    //   'lastName': new FormControl('',Validators.pattern('[A-Z]')),
    //   'age': new FormControl('', Validators.pattern('[0-9]')),
    //   'id': new FormControl('',Validators.pattern('[0-9]')),
    //   'goobbies': new FormArray([new FormControl('')]),
    //   'email': new FormControl('', Validators.email),
    //   'hasBoobies': new FormControl(true),
    // }, Validators.required);

    this.personForm = this.formBuilder.group({
      direcciones: this.formBuilder.group({
        address: ['']
      }),
      name: [''],
      lastName: ['', Validators.pattern('^[a-zA-Z]+$')],
      age: ['', Validators.pattern('^[0-9]+$')],
      id: ['', Validators.pattern('^[0-9]+$')],
      goobbies: this.formBuilder.array([['']]),
      email: ['', Validators.email],
      hasBoobies: [true]
    }, { validators: [Validators.required]});
  }

  save() {
    console.log(this.personForm);
    this.personsSaved.push(this.personForm.value);
    this.personForm.reset();
    this.personForm.patchValue({hasBoobies: true});
  }

}
