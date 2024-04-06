import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreasedBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `,
})
export class CounterComponent {
  public title: string = 'Mi primera APP de Angular';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public decreasedBy(value: number): void {
    this.counter -= value;
  }

  public reset() {
    this.counter = 0;
  }
}
