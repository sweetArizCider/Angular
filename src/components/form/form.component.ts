import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../types';
import { InputComponent } from '../../layout/inputs/input.component';
import { ButtonComponent } from '../../layout/buttons/button.component';
import { MainCardComponent } from '../../layout/cards/mainCard.component'; 

@Component({
  selector: 'form-selector',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    ButtonComponent,
    MainCardComponent
  ]
})
export class FormComponent {
  @Output() addItem = new EventEmitter<Item>();

  formData: Item = {
    name: '',
    lastName: '',
    favoriteColor: ''
  };

  onSubmit(){
    if (this.formData.name && 
        this.formData.lastName && 
        this.formData.favoriteColor
      ){
      this.addItem.emit({ ...this.formData });
      this.formData = { name: '', lastName: '', favoriteColor: '' };
    }
  }
}