import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading: Subject<boolean>;
  constructor() {
    this.isLoading = new Subject<boolean>();
  }
}
