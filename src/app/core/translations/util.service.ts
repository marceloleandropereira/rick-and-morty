import { Injectable } from '@angular/core';
import { Translate } from './translate.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private sessionUserLanguage: string = 'user_language';

  public getLanguages(): Translate[] {
    return [
      new Translate({
        id: 'en',
        src: '/assets/images/usa_flag.png'
      }),
      new Translate({
        id: 'pt-BR',
        src: '/assets/images/brazil_flag.png'
      })
    ]
  }

  public getUserLanguage(): Translate {
    let languageStorage = localStorage.getItem(this.sessionUserLanguage);

    if (!languageStorage) {
      languageStorage = '{"id":"en","src":"/assets/images/usa_flag.png"}';
    }

    return JSON.parse(languageStorage);
  }

  public setUserLanguage(language: Translate): void {
    localStorage.setItem(this.sessionUserLanguage, JSON.stringify({...language}))
  }
}
