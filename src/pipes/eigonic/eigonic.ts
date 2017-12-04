import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EigonicPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */




  @Pipe({ name: 'translate' })
  export class Translator implements PipeTransform {
    
    private static langBundle: any[];
    public static currentLang: string;
    public static fallbackLang: string;
    static init(langBundle: any[], fallbackLang: string, currentLang?: string) {
      Translator.langBundle = langBundle;
      Translator.currentLang = currentLang;
      Translator.fallbackLang = fallbackLang;
    }

    static switchLang(lang: string) {
      Translator.currentLang = lang;
    }

    transform(value: string): string {
      // If there is no selected language, use the default.
      if (Translator.currentLang === null || Translator.currentLang === undefined)
        Translator.currentLang = Translator.fallbackLang;
      // get the translation from the language bundle
      let transVal = Translator.langBundle[Translator.currentLang][value];
      // if there is no translation, then return the orignal keyword
      if (transVal === null || transVal === undefined)
        transVal = value;
      return transVal;
    }



  }
