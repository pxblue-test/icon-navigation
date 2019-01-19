import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {NavigationService} from './shared/navigation.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  hovering = false;
  hasLeft = true;
  open = false;
  logout = false;

  constructor(
    private _navigationService: NavigationService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      console.log('listening: ' +this.mobileQuery.matches);
      changeDetectorRef.detectChanges();
    }
    this.mobileQuery.addListener(this._mobileQueryListener);
     _navigationService.navToggled$.subscribe(
        value => {
            console.log('toggled: ' + this.open + '->' + !this.open);
            this.open = !this.open;
            changeDetectorRef.detectChanges();
        });
  }

  openChanged(value){
    // if(this.mobileQuery.matches){
    //   this.open = value;
    // }
  }
  onMenuClicked(){
    this._navigationService.toggleMenu();
  }
  closeNav(){
    console.log('closing');
    this.open = false;
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
  toggleDesktop(){
    console.log('toggleD');
    this.open = !this.open;
    console.log(this.open);
    if(!this.open){
      this.hovering = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}