import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class InMemoryDataService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Contribution[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
