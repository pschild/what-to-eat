import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private onlineOfflineCls;

    constructor() {
    }

    ngOnInit() {
        this.addNetworkStatusChangeListeners();
        this.setNetworkStatusClass(navigator.onLine);
    }

    addNetworkStatusChangeListeners() {
        let offline = Observable.fromEvent(window, 'offline');
        let online = Observable.fromEvent(window, 'online');

        offline.subscribe(() => {
            this.setNetworkStatusClass(navigator.onLine);
        });

        online.subscribe(() => {
            this.setNetworkStatusClass(navigator.onLine);
        });
    }

    setNetworkStatusClass(online) {
        this.onlineOfflineCls = online ? 'online' : 'offline';
    }

}
