import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { list } from './list';
import { delay, map, startWith, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { List, ListItem } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list: List = list;

  searchFormControl = new FormControl('');

  filteredList$: Observable<List> = this.searchFormControl.valueChanges.pipe(
    startWith(''),
    tap(() => this.loadingSubject.next(true)),
    delay(100),
    map(
      (searchKeyword: string) => searchKeyword
        ? this.list.filter(li => li.listName.toLowerCase().includes(searchKeyword.toLowerCase()))
        : this.list
    ),
    tap(() => this.loadingSubject.next(false)),
  );


  private selectedItemLocalStorageKey = 'selectedItem';
  private selectedItemSubject = new BehaviorSubject(
      JSON.parse(localStorage[this.selectedItemLocalStorageKey] || null) || this.list[0]
  );
  selectedItem$: Observable<ListItem> = this.selectedItemSubject.asObservable();


  private loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();


  selectListItem = item => {
    this.selectedItemSubject.next(item);
    localStorage[this.selectedItemLocalStorageKey] = JSON.stringify(item);
  }

}


