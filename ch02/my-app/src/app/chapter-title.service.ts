import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChapterTitleService {
  private readonly _title = signal<string>('Chapter 2: IssueTracker Lite');
  readonly title = this._title;

  setTitle(newTitle: string): void {
    this._title.set(newTitle);
  }
}
