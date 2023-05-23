import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item.model';
import {ItemsService} from "../../../services/items.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe({
      next: (items) => {
        this.items = items;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
