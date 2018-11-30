import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegurancaPage } from "../seguranca/seguranca";
import { SustentabilidadePage } from "../sustentabilidade/sustentabilidade";
import { VocabularioPage } from "../vocabulario/vocabulario";
import { AreasPage } from "../areas/areas";
import { AlfabetoPage } from "../alfabeto/alfabeto";
import { SaudacaoPage } from "../saudacao/saudacao";

@Component({
  selector: 'page-cabout',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) { 
   
  }

 goToOtherPageAreas(){ 
      this.navCtrl.push(AreasPage);
  }
  goToOtherPageSeguranca(){ 
      this.navCtrl.push(SegurancaPage);
  }

  goToOtherPageSustentabilidade(){ 
      this.navCtrl.push(SustentabilidadePage);
  }

  goToOtherPageVocabulario(){ 
      this.navCtrl.push(VocabularioPage);
  }
  
  goToOtherPageSaudacao(){ 
      this.navCtrl.push(SaudacaoPage);
  }

  goToOtherPageAlfabeto(){ 
      this.navCtrl.push(AlfabetoPage);
  }

}
