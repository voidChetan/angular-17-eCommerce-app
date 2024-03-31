import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.isInViewPort()
  }
  @HostListener('window:load', ['$event']) 
  onLoad(event: Event) {
    console.log(123);
  } 

  @HostListener('window:scroll', [])
  onWindowScroll() { 
    this.isInViewPort()
   
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
      this.loadContent();
    }
  }

  private loadContent() {
    // Implement logic to load content, such as loading images
    const img = this.el.nativeElement as HTMLImageElement;
    const src = img.getAttribute('data-src');

    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
  }

}
