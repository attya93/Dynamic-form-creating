import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { FieldsDocumentComponent } from '../fields-document/fields-document.component';

@Component({
  selector: 'app-defination-document',
  templateUrl: './defination-document.component.html',
  styleUrls: ['./defination-document.component.css']
})
export class DefinationDocumentComponent implements OnInit {
  @Input() public defForm: FormGroup;
  @Input() arrayDefIndex: number;
  @Output() deleteDefForm: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  static adduserContactItem(): FormGroup {
    return new FormGroup({
      id: new FormControl(""),
      titleEn: new FormControl(""),
      titleAr: new FormControl(""),
      descriptionAr: new FormControl(""),
      descriptionEn: new FormControl(""),
      repeation: new FormControl(""),
      form: new FormGroup({
        fields: new FormArray([])
      })
    })
  }
  public deleteDefFormItem(index: number): void {
    this.deleteDefForm.next(index)
  }

  get DefForm(): FormGroup {
    return this.defForm! as FormGroup;
  }
  get id(): FormControl {
    return this.DefForm?.controls.id as FormControl
  }
  get titleAr(): FormControl {
    return this.DefForm?.controls.titleAr as FormControl
  }
  get titleEn(): FormControl {
    return this.DefForm?.controls.titleEn as FormControl
  }
  get descriptionAr(): FormControl {
    return this.DefForm?.controls.descriptionAr as FormControl
  }
  get descriptionEn(): FormControl {
    return this.DefForm?.controls.descriptionEn as FormControl
  }
  get repeation(): FormControl {
    return this.DefForm?.controls.repeation as FormControl
  }
  get form(): FormGroup {
    return this.DefForm?.controls.form as FormGroup
  }
  get fields(): FormArray {
    return this.form?.controls.fields as FormArray;
  }

  public addFieldsToForm() {
    this.fields?.push(FieldsDocumentComponent.adduserFiedItem())
  }
  public deleteFieldsById(index: number) {
    return this.fields?.removeAt(index);
  }
}
