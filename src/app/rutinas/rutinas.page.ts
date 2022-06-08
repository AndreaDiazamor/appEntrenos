import { Component, OnInit } from '@angular/core';
import {RutinasService} from './rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

    rutinas = [];
  constructor(private rutinaService: RutinasService) { }

  ngOnInit() {
    this.rutinas = this.rutinaService.getRutinas();
  }
}
