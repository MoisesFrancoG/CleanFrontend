import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    const destinationID = 123;
    this.socket$ = new WebSocketSubject(`ws://localhost:4000/ws?destinationID=${destinationID}`);
  }

  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }
}
