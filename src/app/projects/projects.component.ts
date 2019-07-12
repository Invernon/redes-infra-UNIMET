import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators/first';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public isLoading: boolean;
  public projects: any;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.isLoading = true;
    this.projects = await this.http.get('../../assets/projects.json').pipe(first()).toPromise();
    this.projects.sort((a, b) => -a.id + b.id);
    this.isLoading = false;
  }

}
