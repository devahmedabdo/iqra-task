export interface Field {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  validations?: Validations;
  defaultValue?: any;
  fields?: Field[];
  options?: Option[];
}
export interface Option {
  value: string;
  label: string;

}
export interface Validations {
  required?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  async?: string;
} 