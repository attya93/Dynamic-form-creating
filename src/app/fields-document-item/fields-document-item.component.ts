import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FieldDefenation } from '../models/FieldsDefienation';

@Component({
  selector: 'app-fields-document-item',
  templateUrl: './fields-document-item.component.html',
  styleUrls: ['./fields-document-item.component.css']
})
export class FieldsDocumentItemComponent implements OnInit {

  typeOfInputFields = [
    {
      id: 0,
      title: 'Text Field',
      value: {
        field: 'input',
        type: 'text',
      },
    },
    {
      id: 1,
      title: 'Password Field',
      value: {
        field: 'input',
        type: 'password',
      },
    },
    {
      id: 2,
      title: 'hidden Field',
      value: {
        field: 'input',
        type: 'hidden',
      },
    },
    {
      id: 3,
      title: 'Email Field',
      value: {
        field: 'input',
        type: 'email',
      },
    },
    {
      id: 4,
      title: 'Date Field',
      value: {
        field: 'input',
        type: 'datetime',
      },
    },
    {
      id: 5,
      title: 'File Field',
      value: {
        field: 'input',
        type: 'file',
      },
    },
    {
      id: 6,
      title: 'Image Field',
      value: {
        field: 'input',
        type: 'image',
      },
    },
    {
      id: 7,
      title: 'select Field',
      value: {
        field: 'select',
        type: '',
      },
    },
    {
      id: 8,
      title: 'checkbox Field',
      value: {
        field: 'input',
        type: 'checkbox',
      },
    },
    {
      id: 9,
      title: 'radio Field',
      value: {
        field: 'input',
        type: 'radio',
      },
    },
  ];
  filedRequired = [
    { id: 0, title: 'False', value: false },
    { id: 1, title: 'True', value: true },
  ];
  holdFiledId: number = null;
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initalForm();
  }
  initalForm() {
    this.form = new FormGroup({
      fieldType: new FormControl(''),
      fieldName: new FormControl(''),
      regxField: new FormControl(''),
      errorMessage: new FormControl(''),
      multiFiles: new FormControl(''),
      subOptionField: new FormArray([]),
    });
  }

  get f() {
    return this.form as FormGroup;
  }
  get fieldType() {
    return this.f.controls.fieldType as FormControl;
  }
  get fieldName() {
    return this.f.controls.fieldName as FormControl;
  }
  get regxField() {
    return this.f.controls.regxField as FormControl;
  }
  get errorMessage() {
    return this.f.controls.errorMessage as FormControl;
  }
  get multiFiles() {
    return this.f.controls.multiFiles as FormControl;
  }
  get subOptionField() {
    return this.f.controls.subOptionField as FormArray;
  }

  addSubOption() {
    let opt = new FormGroup({
      key: new FormControl(''),
      value: new FormControl(''),
    });
    this.subOptionField.push(opt);
  }
  deleteSubOption(optId: number) {
    this.subOptionField.removeAt(optId);
  }
  getFieldId(field) {
    this.holdFiledId = field;
  }

  submit() {
    let holdData!: FieldDefenation;
    let fieldType: any = this.typeOfInputFields.filter((field) => {
      if (field.id == this.fieldType.value) return field.value;
    });
    holdData = {
      id: Math.random() * 10,
      fieldType: { ...fieldType },
      fieldName: this.fieldName.value,
      regxField: this.regxField.value,
      errorMessage: this.errorMessage.value,
      multiFiles: this.multiFiles.value,
      subOptionField: { ...this.subOptionField.value },
    };
    console.log(holdData);
  }
}
