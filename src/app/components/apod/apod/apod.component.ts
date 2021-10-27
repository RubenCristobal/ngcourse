import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};

  constructor(private apodService: ApodService) { }

  ngOnInit(): void {
    this.apodService.getApod().subscribe(
      (data) => {
        this.apod = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
