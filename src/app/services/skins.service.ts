import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkinsService {
  constructor(private http: HttpClient) {}
  url =
    'https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json';

  getAllSkins(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
