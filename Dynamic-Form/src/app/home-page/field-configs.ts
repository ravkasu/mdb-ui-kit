import { Validators } from "@angular/forms";

export const fieldConfigs = [
    {
      name: 'name',
      label: 'Name:',
      type: 'text',
      show: true,
      validators: [Validators.required]
    },
    {
      name: 'email',
      label: 'E-Mail:',
      type: 'email',
      show: true,
      validators: [Validators.required, Validators.email]
    },
    {
      name: 'gender',
      label: 'Gender:',
      type: 'radio',
      option: ['Male', 'Female'],
      show: true
    },
    {
      name: 'checkbox',
      label: 'Do you want to give your comments:',
      type: 'checkbox',
      show: true,
      validators: {}
    },
    {
      name: 'comments',
      label: 'Comments:',
      type: 'text',
      show: true,
      validators: {}
    }
  ];
  