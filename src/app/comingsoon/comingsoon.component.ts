import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../shared/navigation.service';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'coming-soon',
  template: `
    <mat-toolbar color="primary" class="example-toolbar">
      <button fxShow.gt-xs="false" type="button" aria-label="Toggle sidenav" mat-icon-button (click)="onMenuClicked()" style="margin-left:-4px; margin-right: 12px">
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <h6 class="example-app-name">{{title+': Coming Soon'}}</h6>
    </mat-toolbar>`,
  styleUrls: []
})
export class ComingSoonComponent implements OnInit {
  title = '';
  constructor(private _navigationService: NavigationService, private route: ActivatedRoute) { }
  onMenuClicked(){
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
    this.title = this.route.snapshot.data['title']
  }
}