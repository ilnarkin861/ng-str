import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {HttpService} from '../../services/http.service';
import {User} from '../../data/user';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit{

  users: Array<User> = []

  constructor(@Inject(DOCUMENT) private document: Document,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.document.title = "Hello, world";
    this.httpService.getUsers().subscribe({
      next: value => {
        this.users = value;
      }
    })
  }
}
