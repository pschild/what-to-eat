import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private onlineOfflineCls = 'online';

    constructor() {
    }

    ngOnInit() {
        this.addNetworkStatusChangeListeners();
    }

    addNetworkStatusChangeListeners() {
        let offline = Observable.fromEvent(window, 'offline');
        let online = Observable.fromEvent(window, 'online');

        offline.subscribe(() => {
            this.onlineOfflineCls = 'offline';
        });

        online.subscribe(() => {
            this.onlineOfflineCls = 'online';
        });
    }

}
