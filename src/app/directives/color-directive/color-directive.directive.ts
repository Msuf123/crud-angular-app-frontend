import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorDirective]',
  standalone: true
})
export class ColorDirectiveDirective implements OnChanges {
  @Input() colorBooleanValues!:boolean
  @HostBinding('style.color') color!:string
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.colorBooleanValues){
       this.color='red'
    }
    else{
      this.color='green'
    }
  }
  
}
