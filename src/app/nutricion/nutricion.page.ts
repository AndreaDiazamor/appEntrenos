import { Component, OnInit } from '@angular/core';
import {NutricionService} from './nutricion.service';

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.page.html',
  styleUrls: ['./nutricion.page.scss'],
})
export class NutricionPage implements OnInit {
  nutricion = [];
  constructor(private onenutricionService: NutricionService) { }

  ngOnInit() {
    this.onenutricionService.getNutricion();
  }

}
