import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})

/**
 * Implement dropdown for bootstrap dropdown-list
 * by simply appending 'open' class if condition
 * is true
 *
 */
export class Dropdown {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  private isOpen = false;

}
