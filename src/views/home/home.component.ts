import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ListComponent } from '../../components/list/list.component';
import { Item } from '../../types';

@Component({
  selector: 'home-selector',
  templateUrl: '../../views/home/home.component.html',
  styleUrl: './home.component.css',
  imports: [
    FormComponent, 
    ListComponent
  ],
})
export class AppComponent {


}
