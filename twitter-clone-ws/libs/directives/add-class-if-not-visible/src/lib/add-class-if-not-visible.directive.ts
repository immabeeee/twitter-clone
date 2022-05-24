import { ElementRef, HostListener, Directive, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[addClassIfNotVisible]'
})

export class AddClassIfNotVisibleDirective {
    @Input('addClassIfNotVisible') className!: string;
    @Input('childSelector') selector!: string;

    constructor() { }

    @HostListener('scroll', ['$event'])
    onScroll() {
        if (this.isChildVisible()) {
            this.removeClass();
        } else {
            this.addClass();
        }
    }

    private addClass(): void {
        if (!this.isExistingClassName()) {
            this.getChild().classList.add(this.className)
        }
    }

    private removeClass(): void {
        if (this.isExistingClassName()) {
            this.getChild().classList.remove(this.className)
        }
    }

    private isExistingClassName() {
        return this.getChild().classList.contains(this.className);
    }

    private isChildVisible() {
        const rect = this.getChild().getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;

        return topShown && bottomShown
    }

    private getChild(): HTMLElement {
        return (document.getElementsByClassName(this.selector)[0] as HTMLElement)
    }
}