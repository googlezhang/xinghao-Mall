import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { XinghaoMallSharedModule } from 'app/shared/shared.module';
import { XinghaoMallCoreModule } from 'app/core/core.module';
import { XinghaoMallAppRoutingModule } from './app-routing.module';
import { XinghaoMallHomeModule } from './home/home.module';
import { XinghaoMallEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    XinghaoMallSharedModule,
    XinghaoMallCoreModule,
    XinghaoMallHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    XinghaoMallEntityModule,
    XinghaoMallAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class XinghaoMallAppModule {}
