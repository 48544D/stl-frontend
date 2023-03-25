import { Component } from '@angular/core';

@Component({
  selector: 'app-st-solutions',
  templateUrl: './st-solutions.component.html',
  styleUrls: ['./st-solutions.component.scss']
})
export class StSolutionsComponent {
  activeTab: string = 'tab1';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
