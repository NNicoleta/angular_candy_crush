import { Component, OnInit } from '@angular/core';
import { ICells } from '../../models/ICells';
import { CandyService } from '../../services/CandyService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  Candy_cells: Array<ICells> = [];
  x: number = 0;
  Square_drag: HTMLElement | null = null;

  constructor(public candies: CandyService) {
    this.getCandy();
  }

  ngOnInit(): void {
    this.Candy_cells = this.candies.GetCell();
    this.verify_col();
    //this.verify_lin();
    this.fill_small_white_cells();
    this.start_game_loop();
  }

  getCandy(): Array<ICells> | any {
    this.Candy_cells = this.candies.GetCell();
    return this.Candy_cells;
  }

  verify_col(): boolean {
    if (this.candies.Checking_col(this.Candy_cells)) {

      console.log('Column fill...!');
      this.fill_small_white_cells;
      return true;
    } else {
      console.log('I didn"t find any column of three.');

      return false;
    }
  }

  dragStart(event: DragEvent, ind: number): void {
    this.Square_drag = event.target as HTMLElement;
    event.dataTransfer?.setData('text/plain', ind.toString());
    console.log("it starts");
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    console.log("vruuum");
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    console.log("event?");
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    console.log("leaveeeee me alone css");
  }

  dragDrop(event: DragEvent, ind: number): void {
    event.preventDefault();
    const IND_DRAG = event.dataTransfer?.getData('text/plain');


    if (IND_DRAG !== undefined && IND_DRAG !== '') {
      const HERE_WE_GO = parseInt(IND_DRAG, 10);
      if (!isNaN(HERE_WE_GO)) {
        this.swap_candies_it_s_the_time(HERE_WE_GO, ind);
      }
    }
  }



  dragEnd(event: DragEvent, ind: number): void {
    this.verify_col();
    this.fill_small_white_cells();
  }

  swap_candies_it_s_the_time(from_ind: number, to_ind: number): void {
    [this.Candy_cells[from_ind], this.Candy_cells[to_ind]] =
      [this.Candy_cells[to_ind], this.Candy_cells[from_ind]];
  }


  fill_small_white_cells(): void {
    this.candies.Fill(this.Candy_cells);
  }

  start_game_loop(): void {
    setInterval(() => {
      this.verify_col();
      this.fill_small_white_cells();
      //console.log('changed');
    }, 1000);
  }
}




