import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() sortChange = new EventEmitter<string>();

  sortProducts(event: Event) {
    const sortOrder = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(sortOrder);
  }
}
