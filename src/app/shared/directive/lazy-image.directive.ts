import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective {

  constructor(private el: ElementRef) { }


  @HostListener('window:load',['events'])
  onLoad() {
    this.isInViewPort();
  }

  @HostListener('window:scroll',[])
  onScroll() {
    debugger;
    this.isInViewPort();
  }

  private isInViewPort () {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowInnerHeight = window.innerHeight; 
    if (
      rect.top >= 0 &&
      rect.top <= windowInnerHeight ||
      rect.bottom >= 0 && 
      rect.bottom <= windowInnerHeight ||
      rect.top < 0 &&
      rect.bottom > windowInnerHeight
    ) {
      this.loadImage();
    }
  }

  private loadImage () {
    const img = this.el.nativeElement as HTMLImageElement;
    const imageUrl = img.getAttribute('data-src');
    if(imageUrl) {
      img.src = imageUrl; 
    }
  }

}
