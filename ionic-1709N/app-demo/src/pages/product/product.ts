import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product:any = [];

  email:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient:HttpClient ,
    private storage:Storage) {
  }

  ionViewDidLoad() {
    let productId = this.navParams.get('productId');
    let url = `/product/${productId}`;
    this.httpClient.get(url)
      .subscribe(
        (res) => {
          this.product = res;
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
