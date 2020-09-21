import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();
  private subject = new Subject<any>();

  constructor() { }

  updatedDataSelection(data) {
    this.dataSource.next(data);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
}
}
