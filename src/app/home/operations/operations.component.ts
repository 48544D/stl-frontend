import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  activeTab: string = 'tab1';

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
