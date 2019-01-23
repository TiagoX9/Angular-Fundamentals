import { Component, Input } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './create-session.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[];
}
