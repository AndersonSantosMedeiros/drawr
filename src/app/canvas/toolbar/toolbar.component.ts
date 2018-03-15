import { Component } from '@angular/core';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-canvas-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public toolService: ToolService) {
  }
}
