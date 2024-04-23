import { Component, input } from '@angular/core';
import { tv } from 'tailwind-variants';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button')
  size = input<'small' | 'medium' | 'large'>('medium')
  label = input('')
  variant = input<'solid' | 'outline' | 'ghost'>('solid')

  button = tv({
    base: 'inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
      size: {
        small: 'px-2.5 py-1.5 text-xs',
        medium: 'px-4 py-2 text-sm',
        large: 'px-4 py-2 text-base'
      },

      variant: {
        ghost: 'rounded-md px-2 shadow-none ',
        solid: 'bg-blue-400 text-white hover:bg-blue-400 hover:opacity-80 ',
        outline: 'border border-zinc-300 text-zinc-700  ',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'solid',
      rounded: 'md'
    }
  })
}
