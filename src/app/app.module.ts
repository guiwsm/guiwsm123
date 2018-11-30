import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProducaoPage } from '../pages/producao/producao';
import { PcpPage } from '../pages/pcp/pcp';
import { QualidadePage } from '../pages/qualidade/qualidade';
import { ClicheriaPage } from '../pages/clicheria/clicheria';
import { SegurancaPage } from '../pages/seguranca/seguranca';
import { SustentabilidadePage } from '../pages/sustentabilidade/sustentabilidade';
import { VocabularioPage } from '../pages/vocabulario/vocabulario';
import { InformacoesPage } from '../pages/informacoes/informacoes';
import { AreasPage } from '../pages/areas/areas';
import { SaudacaoPage } from '../pages/saudacao/saudacao';
import { AlfabetoPage } from '../pages/alfabeto/alfabeto';
import { SemanaPage } from '../pages/semana/semana';
import { PalavrasPage } from '../pages/palavras/palavras';
import { VerbosPage } from '../pages/verbos/verbos';
import { ImagemsegPage } from '../pages/imagemseg/imagemseg';
import { IntrolibrasPage } from '../pages/introlibras/introlibras';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProducaoPage,
    PcpPage,
    QualidadePage,
    ClicheriaPage,
    SegurancaPage,
    SustentabilidadePage,
    VocabularioPage,
    InformacoesPage,
    AreasPage,
    SaudacaoPage,
    AlfabetoPage,
    SemanaPage,
    PalavrasPage,
    VerbosPage,
    ImagemsegPage,
    IntrolibrasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProducaoPage,
    PcpPage,
    QualidadePage,
    ClicheriaPage,
    SegurancaPage,
    SustentabilidadePage,
    VocabularioPage,
    InformacoesPage,
    AreasPage,
    SaudacaoPage,
    AlfabetoPage,
    SemanaPage,
    PalavrasPage,
    VerbosPage,
    ImagemsegPage,
    IntrolibrasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
