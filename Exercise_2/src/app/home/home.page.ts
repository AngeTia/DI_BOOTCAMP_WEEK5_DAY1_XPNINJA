import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts?: any;

  constructor(private httpService: IonicRestService) {}

  ngOnInit(): void {
    this.httpService.http().subscribe(data => this.posts = data )
  }

}
