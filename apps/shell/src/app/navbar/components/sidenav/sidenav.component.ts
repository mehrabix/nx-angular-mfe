import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modulefederation-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent  {
  @Output() sidenavClose = new EventEmitter();


  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
