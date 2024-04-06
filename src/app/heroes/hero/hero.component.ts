import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(otherHero: string): void {
    this.name = otherHero;
  }

  changeAge(otherAge: number): void {
    this.age = otherAge;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
