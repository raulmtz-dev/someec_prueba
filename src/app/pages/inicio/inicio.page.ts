import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit, AfterViewInit {

  constructor(private gestureCtrl: GestureController) {}

  ngOnInit() {}

  ngAfterViewInit() {

    //codigo para cambiar el fondo cuando se hace scroll

    const ionContent = document.querySelector('ion-content');

    if (!ionContent) {
      console.error('Elemento ion-content no encontrado.');
      return;
    }

    const gesture = this.gestureCtrl.create({
      el: ionContent,
      gestureName: 'swipe-vertical',
      threshold: 0,
      onMove: (ev) => {
        const deltaY = ev.deltaY;
        const deltaX = ev.deltaX;

        // Solo responder a gestos verticales
        if (Math.abs(deltaY) < Math.abs(deltaX)) return;

        // Tan pronto como se detecte la dirección, cambiamos el fondo
        if (deltaY > 10) {
          ionContent.style.setProperty('--ion-background-color', '#0A2542');
          //console.log("swipe");
        } else if (deltaY < -10) {
          ionContent.style.setProperty('--ion-background-color', 'white');
          //console.log("swipe");
        }
      }
    });

    gesture.enable();
  }
}

