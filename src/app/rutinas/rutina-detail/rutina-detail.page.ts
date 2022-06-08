import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RutinasService} from '../rutinas.service';
import {Rutina} from '../rutina.model';

@Component({
  selector: 'app-rutina-detail',
  templateUrl: './rutina-detail.page.html',
  styleUrls: ['./rutina-detail.page.scss'],
})
export class RutinaDetailPage implements OnInit {
  rutina: Rutina;
  constructor(private activatedRoute: ActivatedRoute, private rutinasService: RutinasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=> {
      //redirect
      const recipeId = paramMap.get('rutinaId');
      this.rutina = this.rutinasService.getRutina(recipeId);
      console.log(this.rutina);
    });
  }

}
