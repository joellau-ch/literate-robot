import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@literate-robot/api-interfaces';

@Component({
  selector: 'literate-robot-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
