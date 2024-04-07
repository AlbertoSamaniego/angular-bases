import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    console.log({id});

    this.onDelete.emit(id);

  }
}
