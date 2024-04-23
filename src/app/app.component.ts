import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, InputComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }


  form: FormGroup = this.fb.group({
    name: [''],
    password: ['', { minLength: 8 }]
  })

  getControl(name: string) {
    return this.form.get(name) as FormControl
  }
}
