import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MyNotification} from '../models/my-notification';

@Injectable()
export class Notifier {
    private notificationSource = new BehaviorSubject<MyNotification>(undefined);

    notification$ = this.notificationSource.asObservable();

    show(notification: MyNotification) {
        this.notificationSource.next(notification);
    }

}
