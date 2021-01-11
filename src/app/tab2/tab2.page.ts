import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

    constructor(private actionSheetCtrl: ActionSheetController) {
    }

    async open() {
        const buttons = [
            {
                text: '拍照',
                icon: 'camera',
                handler: () => {
                },
            }, {
                text: '相册',
                icon: 'image',
                handler: () => {

                },
            }, {
                text: '取消',
                role: 'cancel',
                handler: () => {
                },
            },
        ];

        const actionSheet = await this.actionSheetCtrl.create({
            buttons,
        });
        actionSheet.present();

    }

}
