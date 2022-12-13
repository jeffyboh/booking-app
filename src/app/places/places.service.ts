import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      1500.0
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris',
      'https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2014/01/musee-vie-romantique-1.jpg?ssl=1',
      1200.0
    ),
    new Place(
      'p3',
      'Beach Home',
      'A beach home in St Augustine',
      'https://www.oldcity.com/wp-content/uploads/2017/10/beachfrontbb-outside.jpg',
      500.0
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }

  constructor() {}
}
