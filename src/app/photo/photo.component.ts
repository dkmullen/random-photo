import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  imageUrl: string;

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.getRandomPic();
  }

  getRandomPic() {
   this.photoService.getPhoto().subscribe(res => {
     this.imageUrl = res.urls.regular;
   });
  }

}
