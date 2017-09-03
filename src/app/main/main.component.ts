import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-main-root',
  templateUrl: './main.component.html'
})
export class MainComponent {
  blocks = [''];
  newBlock() {
    this.blocks.push('');
  }
}

