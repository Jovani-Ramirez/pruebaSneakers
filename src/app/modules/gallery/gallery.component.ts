import { Component, OnInit } from '@angular/core';
import { IDataImage } from 'src/app/interfaces/imgData.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public gallery: IDataImage[];

  constructor() {

    this.gallery = [
      {img: '../../../assets/img/regigigas.png', description: ''},
      {img: '../../../assets/img/registeel.jpg', description: ''},
      {img: '../../../assets/img/regirock.jpg', description: ''},
      {img: '../../../assets/img/regice.jpg', description: ''},
      {img: '../../../assets/img/rayquaza.jfif', description: ''},
      {img: '../../../assets/img/groudon.jpg', description: ''},
      {img: '../../../assets/img/kyogre.jpg', description: ''},
      {img: '../../../assets/img/lunala.jpg', description: ''},
      {img: '../../../assets/img/solg.png', description: ''},
      {img: '../../../assets/img/necrozma.png', description: ''}
    ]
  }

  ngOnInit(): void {
  }

}
