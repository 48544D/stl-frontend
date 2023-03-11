import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  activeTab: string = 'tab1';
  popupVisible = false;

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  togglePopup() {
    this.popupVisible = !this.popupVisible;
  }
}