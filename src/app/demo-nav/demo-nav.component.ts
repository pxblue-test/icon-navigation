import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { slide } from './slide.animation';
import { slideRight } from './slideRight.animation';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'demo-nav',
  templateUrl: './demo-nav.component.html',
  styleUrls: ['./demo-nav.component.scss'],
  animations: [
    slide(),
    slideRight(),
    trigger('navstate', [
      state('compact', style({
        width: '64px',
        overflowX: 'hidden'
      })),
      state('open', style({
        width: '350px',
        boxShadow: '1px 0 1px rgba(0, 0, 0, .24)',
        overflowX: 'hidden'
      })),
      transition('compact => open', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('open => compact', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
})
export class DemoNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private changeDetectorRef: ChangeDetectorRef) { }
  animationDisabled = true;
  logout = false;
  open = false;
  hovering = false;
  version = 6;

  ngAfterViewInit() {
    // We can't change anything after change detection finishes,
    // so we defer assignment to the next cycle.
    // This trick ensures that :enter animations doesn't fire on component init,
    // which is often unwanted. 
    setTimeout(() => this.animationDisabled = false);
  }

  restoreIconNav(){
    this.hovering = false;
  }

}
