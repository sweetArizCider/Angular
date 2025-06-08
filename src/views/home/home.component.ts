import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ListComponent } from '../../components/list/list.component';
import { Item } from '../../types';

@Component({
  selector: 'home-selector',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    FormComponent,
    ListComponent
  ],
})


export class HomeComponent {
  itemList: Item[] = [];

  handleAddItem(newItem: Item) {
    this.itemList = [...this.itemList, newItem];
  }
}
