import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'trending-page',
  imports: [
    // GifListComponent
  ],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {

  GifService = inject(GifService);
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')
  scrollStateService = inject(ScrollStateService);

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();

  }



  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.GifService.loadTrendingGifs();
    }

  }
}
