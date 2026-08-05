import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly chapterTitle = signal('Chapter 1: Angular AI Kick-Starter');

  constructor() {
    this.chapterTitle.SetTitle('Chapter 2: IssueTracker Lite');
  }
}
