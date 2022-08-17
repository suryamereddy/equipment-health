import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() leftSideNavOpened: boolean = false;
  @Input() rightSideNavOpened: boolean = false;

  @Output() toggleLeftSideNav = new EventEmitter<boolean>();
  @Output() toggleRightSideNav = new EventEmitter<boolean>();

  today = new Date();

  constructor(
    private route: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }
}
