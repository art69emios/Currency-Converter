import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from './servers/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

    items: any
    from:any = 'USD'
    to:any = 'CAD'
    amount:any = '1'
    exchangeRateTxt:any
    flags:any

    constructor(private themeService: ThemeService)  {}

    ngOnChanges(): void {
        this.getC()
    }

    ngOnInit(): void {
        this.flags = this.themeService.getFlags()
        this.getC()
     }
   
    changeTheme() {
        this.themeService.switchTheme();
    }


    getC(){
        this.items =  this.themeService.getProduct(this.from).subscribe(data =>{
            this.items = JSON.stringify(data)
            this.items = JSON.parse(this.items)
            let exchangeRate = Object(data).conversion_rates[this.to]
            let totalExRate = (this.amount * exchangeRate).toFixed(2);
            this.exchangeRateTxt = totalExRate;
            console.log(data);
            
           } )
    }

    changeCurrency(){
        let tempCode = this.from;
        this.from = this.to;
        this.to = tempCode;
        this.getC()
    }


    

}
