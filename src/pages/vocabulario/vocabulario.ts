import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { SemanaPage } from "../semana/semana";
import { PalavrasPage } from "../palavras/palavras";
import { VerbosPage } from "../verbos/verbos";
/**
 * Generated class for the VocabularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocabulario',
  templateUrl: 'vocabulario.html',
})
export class VocabularioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOtherPageSemana(){ 
      this.navCtrl.push(SemanaPage);
  }

  goToOtherPagePalavras(){ 
      this.navCtrl.push(PalavrasPage);
  }

  goToOtherPageVerbos(){ 
      this.navCtrl.push(VerbosPage);
  }


}
