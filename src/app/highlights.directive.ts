import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(public el:ElementRef) {
   
   }
@HostListener('mouseenter') onMouseEnter(){
  this.highlights('yellow');
}

@HostListener('mouseleave') onMouseLeave(){
  this.highlights('blue');
}

private highlights(color:any){
this.el.nativeElement.style.color = color;
}
}
