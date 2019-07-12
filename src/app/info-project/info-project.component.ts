import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators/first';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.css']
})
export class InfoProjectComponent implements OnInit {

  public showZoom: boolean = false;
  public srcImageZoom: string = '';
  public project: any;

  public isLoading: boolean;
  public projects: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.isLoading = true;
    this.projects = await this.http.get('../../assets/projects.json').pipe(first()).toPromise();
    this.activatedRoute.params.subscribe(({ id }) => {
      this.project = this.projects[id];
      this.isLoading = false;
    })
  }

  imageZoom(img: string) {
    this.srcImageZoom = img;
    this.showZoom = true;
  }

  closeZoom() {
    this.showZoom = false;
  }

}
