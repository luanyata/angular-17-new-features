import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tv } from 'tailwind-variants';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  label = input('')
  type = input<'text' | 'password' | 'email'>('text')
  placeholder = input('')
  control = input.required<FormControl>()
  name = input.required<string>()
  size = input<'small' | 'medium' | 'large'>('medium')


  input = tv({
    base: 'border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
    variants: {
      size: {
        small: 'px-3 py-2',
        medium: 'px-4 py-3',
        large: 'px-5 py-4'
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  })
}
