import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { Item } from '../../types';

@Component({
  selector: 'button-selector',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})

export class ButtonComponent {
  @Input() label: string = 'Hi :)'
}