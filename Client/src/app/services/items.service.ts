import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseApiUrl + '/api/Items')
  }
  addItem(addItemRequest: Item): Observable<Item> {
    addItemRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Item>(this.baseApiUrl + '/api/Items', addItemRequest);
  }
  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this.baseApiUrl + '/api/Items/' + id);
  }
  updateItem(id: string, updateItemRequest: Item): Observable<Item> {
    return this.http.put<Item>(this.baseApiUrl + '/api/Items/' + id,
      updateItemRequest);
  }
  deleteItem(id: string): Observable<Item> {
    return this.http.delete<Item>(this.baseApiUrl + '/api/Items/' + id)
  }
}
