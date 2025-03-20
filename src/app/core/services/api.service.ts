import { Injectable } from '@angular/core'; 
import { Field } from '../interfaces/schema';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  json: Field[] = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      defaultValue: 'John Doe',
      validations: {
        required: true,
        minLength: 3,
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      defaultValue: 'johndoe@example.com',
      validations: {
        required: true,
        email: true,
        async: 'email',
      },
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Enter your phone',
      validations: {
        required: true,
      },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      validations: {
        required: true,
        minLength: 6,
      },
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      placeholder: 'Enter your age',
      defaultValue: 25,
      validations: {
        required: true,
        min: 18,
      },
    },

    {
      name: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { label: 'USA', value: 'usa' },
        { label: 'UK', value: 'uk' },
        { label: 'Germany', value: 'germany' },
      ],
      defaultValue: 'uk',
      validations: {
        required: true,
      },
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      defaultValue: 'male',
      validations: {
        required: true,
      },
    },
    {
      name: 'hobbies',
      label: 'Hobbies',
      type: 'checkbox',
      options: [
        { label: 'Reading', value: 'reading' },
        { label: 'Sports', value: 'sports' },
        { label: 'Music', value: 'music' },
      ],
      defaultValue: ['reading', 'music'],
    },
    {
      name: 'address',
      label: 'Address',
      type: 'group',
      fields: [
        {
          name: 'street',
          label: 'Street',
          type: 'text',
          placeholder: 'Enter your street name',
          defaultValue: '123 Main St',
        },
        {
          name: 'city',
          label: 'City',
          type: 'text',
          placeholder: 'Enter your city',
          defaultValue: 'New York',
        },
        {
          name: 'zipCode',
          label: 'Zip Code',
          type: 'number',
          placeholder: 'Enter your zip code',
          defaultValue: 10001,
        },
      ],
    },
    {
      name: 'workExperience',
      label: 'Work Experience',
      type: 'repeatable',
      fields: [
        {
          name: 'company',
          label: 'Company Name',
          type: 'text',
          placeholder: 'Enter company name',
          defaultValue: 'Tech Corp',
          validations: {
            required: true,
          },
        },
        {
          name: 'position',
          label: 'Position',
          type: 'text',
          placeholder: 'Enter your position',
          defaultValue: 'Software Engineer',
          validations: {
            required: true,
          },
        },
        {
          name: 'years',
          label: 'Years of Experience',
          type: 'number',
          placeholder: 'Enter number of years',
          defaultValue: 3,
          validations: {
            required: true,
          },
        },
        {
          name: 'adult',
          label: 'Are you adult?',
          type: 'switch',
          validations: {
            required: true,
          },
        },
        {
          name: 'hobbies',
          label: 'Hobbies',
          type: 'checkbox',
          options: [
            { label: 'Reading', value: 'reading' },
            { label: 'Sports', value: 'sports' },
            { label: 'Music', value: 'music' },
          ],
          defaultValue: ['reading', 'music'],
        },
      ],
    },
    {
      type: 'switch',
      label: 'I agree to the terms and conditions',
      name: 'terms',
      validations: {
        required: true,
      },
    },
  ];
}
