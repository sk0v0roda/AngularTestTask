import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";
import {ItemsService} from "../../services/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemRequest: Item = {
    id: '',
    name: '',
    price: 0,
    description: '',
    img: ''
  };
  constructor(private itemService: ItemsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addItem() {
    this.itemService.addItem(this.addItemRequest).subscribe({
      next: (item) => {
        this.router.navigate(['items'])
      }
    });
  }
}
