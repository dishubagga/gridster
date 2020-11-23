import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly DASHBOARDS = 'assets/data/dashboards.json';
  constructor(protected httpClient: HttpClient) { }
  public getDashboards(): Observable<any> {
    return this.httpClient.get<any>(this.DASHBOARDS);
  }
}
