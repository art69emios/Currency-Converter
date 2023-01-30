import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document, private http:HttpClient) {  }
    
    
    flags:any = ['USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','FOK','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KID','KMF','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRU','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLE','SLL','SOS','SRD','SSP','STN','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TVD','TWD','TZS','UAH','UGX','UYU','UZS','VES','VND','VUV','WST','XAF','XCD','XDR','XOF','XPF','YER','ZAR','ZMW','ZWL'  ]

    switchTheme() {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink.getAttribute('href') == 'saga-blue.css') {
            themeLink.href = 'arya-blue.css';
        }else{
            themeLink.href = 'saga-blue.css';
        }
    }
    
    
  
        getProduct(base:string){
           return this.http.get('https://v6.exchangerate-api.com/v6/496eafff9d4cf3d9df96b775/latest/' + base )
        }

        getFlags(){
          return this.flags
        }
}