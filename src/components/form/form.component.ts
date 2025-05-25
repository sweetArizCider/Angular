import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../layout/inputs/input.component';
import { MainCardComponent } from '../../layout/cards/mainCard.component';
import { ButtonComponent } from '../../layout/buttons/button.component';
import { type Item } from '../../types';

@Component({
  selector: 'form-selector',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    MainCardComponent,
    ButtonComponent,
  ],
  standalone: true,
})
export class FormComponent {
  @Output() itemCreated = new EventEmitter<Item>();

  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    favoriteColor: new FormControl(''),
  });

  submitForm() {
    if (this.form.valid) {
      this.itemCreated.emit(this.form.value as Item);
      this.form.reset(); // Clear the form after submission
    }
  }
}