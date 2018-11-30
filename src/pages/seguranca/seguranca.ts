import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagemsegPage } from "../imagemseg/imagemseg";

/**
 * Generated class for the SegurancaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-seguranca',
  templateUrl: 'seguranca.html',
})
export class SegurancaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOtherPageImagemseg(){ 
      this.navCtrl.push(ImagemsegPage);
  }

}
