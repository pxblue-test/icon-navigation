import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {NavigationService} from './shared/navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  hovering = false; // is the navigation menu hovered over
  hasLeft = true; // used for handling hover behavior on nav menu
  open = false; // is the nav menu open
  userMenu = false; // toggles menu mode on mobile
  goingMobile = false; // we use this to prevent the flash of mobile sidenav when making the window smaller

  constructor(
    private _navigationService: NavigationService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      if(this.mobileQuery.matches){ this.goingMobile = true; }
      changeDetectorRef.detectChanges();
    }
    this.mobileQuery.addListener(this._mobileQueryListener);
      _navigationService.navToggled$.subscribe(
        value => {
          this.open = !this.open;
          changeDetectorRef.detectChanges();
        }
      );
  }

  toggleDesktopMenu(){
    this._navigationService.toggleMenu();
  }
  leave(){
    this.hovering = false;
    this.hasLeft = true;
  }
  enter(){
    if(this.hasLeft){
      this.hovering = true;
    }
    this.hasLeft = false;
  }
  closeNav(){
    if(this.mobileQuery.matches){this.open = false;}
    this.hovering = false;
    this.hasLeft = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}