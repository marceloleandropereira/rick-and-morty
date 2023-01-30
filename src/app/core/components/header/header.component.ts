import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Translate } from '../../translations/translate.model';
import { UtilService } from '../../translations/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public translates: Translate[] = this.translateUtilService.getLanguages();
  public userLanguage: Translate;
  
  constructor(
    private translateUtilService: UtilService,
    private translateService: TranslateService
  ) {
      this.userLanguage = this.getUserLanguage();
      this.translateService.use(this.userLanguage.id);
  }

  public getUserLanguage(): Translate {
    return this.translateUtilService.getUserLanguage();
  }

  public setTranslate(translate: Translate): void {
    this.translateService.use(translate.id);
    this.translateUtilService.setUserLanguage(translate);
    this.userLanguage = translate;
  }
}
