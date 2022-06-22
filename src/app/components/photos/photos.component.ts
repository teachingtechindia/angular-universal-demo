import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((photos: any) => {
        this.photos = photos;
      });
  }

  ngOnInit(): void {}
}
