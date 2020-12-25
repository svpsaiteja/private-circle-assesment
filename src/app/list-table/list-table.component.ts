import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List, ListItem } from '../list';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  @Input() list: List;
  @Input() selectedListItem: ListItem;
  @Input() loading = false;

  @Output() selectListItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
