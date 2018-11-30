import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProducaoPage } from "../producao/producao";
import { PcpPage } from "../pcp/pcp";
import { QualidadePage } from "../qualidade/qualidade";
import { ClicheriaPage } from "../clicheria/clicheria";

/**
 * Generated class for the AreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-areas',
  templateUrl: 'areas.html',
})
export class AreasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 goToOtherPageProducao(){ 
      this.navCtrl.push(ProducaoPage);
  }

  goToOtherPagePcp(){ 
      this.navCtrl.push(PcpPage);
  }

  goToOtherPageQualidade(){ 
      this.navCtrl.push(QualidadePage);
  }

  goToOtherPageClicheria(){ 
      this.navCtrl.push(ClicheriaPage);
  }
 

}
