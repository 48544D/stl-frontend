import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  activeTab: string = 'tab1';

  constructor(public dialog: MatDialog) { }

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  togglePopup() {
    this.dialog.open(PopupComponent);
  }
}