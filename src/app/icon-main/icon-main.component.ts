import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-main',
  templateUrl: './icon-main.component.html',
  styleUrls: ['./icon-main.component.css'],
})
export class IconMainComponent implements OnInit {
  constructor() {}

  randomIcon!: IconDefinition;

  generateRandomIcon() {
    const icons = Object.keys(faIcons);
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomIconName = icons[randomIndex];
    this.randomIcon = (faIcons as any)[randomIconName] as IconDefinition;
  }

  handleButtonClick() {
    setTimeout(() => {
      this.generateRandomIcon();
    }, 3000);
  }

  ngOnInit(): void {}
}
