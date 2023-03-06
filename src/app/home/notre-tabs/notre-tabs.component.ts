import { Component } from '@angular/core';

@Component({
  selector: 'app-notre-tabs',
  templateUrl: './notre-tabs.component.html',
  styleUrls: ['./notre-tabs.component.scss']
})
export class NotreTabsComponent {
  activeTab: string = 'tab1';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
