import { Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  @Input() public personList: Person[] = [];
}
