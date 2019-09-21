import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder) {

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
      'direcciones':this.formBuilder.group({
        'address':['']
      }),
      'name':[''],
      'lastName': ['', Validators.pattern('[A-Z]')],
      'age': ['', Validators.pattern('[0-9]')],
      'id': ['', Validators.pattern('[0-9]')],
      'goobbies': this.formBuilder.array([['']]),
      'email': ['', Validators.email],
      'hasBoobies': [true]
    },{validators:Validators.required});

  }

}
