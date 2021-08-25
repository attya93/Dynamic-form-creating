# FormBuilder

this way make nesting of forms is more easy and understand, you will implement complex form in easy way

## issue

1- imagine you have formGroup({formArray([formGroup({formArray([formGrouo({})])})]}) , how gard you can implement this soluation in normal way
2- this way garenty to you no momery cashing or error in refrance 

## main view

1- you create normal form with getter to help you to access form-control ,form-array, form-group
2- you static method to insure there are not object referance in momery
3- use input and output to pass formGroup and index of form-array

## developer
1- Mohammed Mamdouh (me :) )
2- omar saleam
3- tareak ramdan
