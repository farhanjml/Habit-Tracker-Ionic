import { Injectable } from '@angular/core';
import { TodoService } from '../todo.service';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  public items: any=[];

    constructor( public todoService: TodoService)
    {
      this.items =
      [
        {title: '',page:''},
        {title: 'Sunday',page:'home'},
        {title: 'For Beginners',page:'beginner'},
        {title: 'Camera Mode',page:'dis1c'},
        {title: 'Shutter Speed',page:'dis1d'},
        {title: 'Aperture',page:'dis1e'},
        {title: 'Camera ISO',page:'dis1f'},
        {title: 'Guide To Buying A Camera',page:'dis2a'},
        {title: 'Guide To Buying A Mirrorless Camera',page:'dis2b'},
        {title: 'Photography Equipment',page:'dis2c'},
        {title: 'Mobile Photography Tips',page:'dis2d'},
        {title: 'Adjust White Balance',page:'dis3a'},
        {title: 'Hold camera Properly',page:'dis3b'},
        {title: 'Play With Perspective',page:'dis3c'},
        {title: 'Pay Attention To The Background',page:'dis3d'},
        {title: 'Read The Histogram',page:'dis3e'},
        {title: 'Start Shooting in RAW',page:'dis3f'},
        {title: 'Computer Hardware',page:'dis4'},
        {title: 'Best Camera for Photography',page:'dis5a'},
        {title: 'Best Camera for Vlogging',page:'dis5b'},
        {title: 'Best Camera for Streaming',page:'dis5c'},
        {title: 'Best Camera for Phones',page:'dis5d'},
        {title: 'Best App for Editing',page:'dis6a'},
        {title: 'Best App for Sharing Your Photographs',page:'dis6b'},
        {title: 'About',page:'setabout'},
      ];
    }
    filterItems(searchTerm)
    {
      return this.items.filter(item =>
        item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
}
