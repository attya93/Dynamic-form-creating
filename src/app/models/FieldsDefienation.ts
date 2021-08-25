export interface FieldDefenation {
  id?: number;
  fieldType: {
    id: number;
    title: string;
    value?: {
      field: string;
      type: string;
    };
  };
  fieldName: string;
  regxField: string;
  errorMessage: string;
  multiFiles: boolean;
  subOptionField?: {
    key: string;
    value: string;
  };
}
