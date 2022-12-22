import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#5F5AEE';
    this.element.nativeElement.style.color = '#000';
    this.element.nativeElement.style.padding = '0.5rem';
  }

}
