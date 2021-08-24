import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fields-document',
  templateUrl: './fields-document.component.html',
  styleUrls: ['./fields-document.component.css']
})
export class FieldsDocumentComponent implements OnInit {
  @Input() public fieldForm: FormGroup;
  @Input() arrayFieldIndex: number;
  @Output() deleteField: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  static adduserFiedItem(): FormGroup {
    return new FormGroup({
      id: new FormControl(""),
      afterText: new FormControl(""),
      description: new FormControl(""),
      errorMessage: new FormControl(""),
      fieldId: new FormControl(""),
      hidden: new FormControl(""),
      inline: new FormControl(""),
      order: new FormControl(""),
      padding: new FormControl(""),
      preText: new FormControl(""),
      repeatable: new FormControl(""),
      required: new FormControl(""),
      title: new FormControl(""),
      underText: new FormControl(""),
    })
  }
  public deleteFieldsFormItem(index: number): void {
    this.deleteField.next(index)
  }

}
