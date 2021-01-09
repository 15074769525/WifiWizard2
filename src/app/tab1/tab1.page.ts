import {Component} from '@angular/core';
import {NetworkStatus, Plugins} from '@capacitor/core';
import {Platform} from '@ionic/angular';

const {Network} = Plugins;
declare var WifiWizard2: any;

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

    status: NetworkStatus;
    wifiSsid = 'Loading...';
    wifiBssid = 'Loading...';

    constructor(private platform: Platform) {
    }

    ionViewWillEnter() {
        this.platform.ready().then(() => {
            Network.getStatus().then(data => {
                this.status = data;
                console.log(data);
            });
        });
    }

    async show() {
        this.status = await Network.getStatus();
        console.log(this.status);
        if (this.status.connectionType === 'wifi') {
            this.wifiSsid = await WifiWizard2.getConnectedSSID();
            this.wifiBssid = await WifiWizard2.getConnectedBSSID();
        }
    }

}
