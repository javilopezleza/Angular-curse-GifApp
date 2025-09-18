import { Component } from '@angular/core';
import { GifSideMenuHeaderComponent } from "./side-menu-header/gif-side-menu-header.component";
import { GifSideMenuOptionsComponent } from "./side-menu-options/gif-side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [GifSideMenuHeaderComponent, GifSideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenuComponent { }
