import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert():void{
    let alert = this.alertCtrl.create({
      title:'Error..',
      subTitle:'Invailid Email or password',
      buttons:['ok']
    })
    alert.present();
  }

  confirmAlert():void{
    let alert = this.alertCtrl.create({
      title:'Confoirm Alert..',
      subTitle:'dffds',
      buttons:[
        {
          text:'cansel',
          handler:()=>{
            console.log('error..')
          }
        },
        {
          text:'ok',
          handler:()=>{
            console.log('true')
          }
        }
        ]
    })
    alert.present()
  }

}
