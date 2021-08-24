import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DefinationDocumentComponent } from '../defination-document/defination-document.component';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {
  public generateParentForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.generateParentContentForm();
  }

  public generateParentContentForm() {
    this.generateParentForm = new FormGroup({
      lang: new FormControl(""),
      dir: new FormControl(""),
      sections: new FormArray([])
    })
  }

  get GenerateParentForm(): FormGroup {
    return this.generateParentForm as FormGroup;
  }

  get lang(): FormControl {
    return this.GenerateParentForm?.controls.lang as FormControl;
  }
  get dir(): FormControl {
    return this.GenerateParentForm?.controls.dir as FormControl;
  }
  get sections(): FormArray {
    return this.GenerateParentForm?.controls.sections as FormArray;
  }

  public submitParentForm() {
    if (!this.GenerateParentForm.value) {
      return;
    }
    console.log(this.GenerateParentForm.value);
  }
  public addSectionsToForm() {
    this.sections?.push(DefinationDocumentComponent.adduserContactItem())
  }
  public deleteSectionById(index: number) {
    return this.sections?.removeAt(index);
  }
}
