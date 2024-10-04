import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../data/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // чтобы заинжектилось прописываем provideHttpClient(withFetch()) в app.config.ts
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>>{
    return this.httpClient.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
  }
}
