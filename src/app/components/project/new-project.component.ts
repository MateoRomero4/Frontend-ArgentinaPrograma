import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nameE: string = '';
  descriptionE: string = '';

  constructor(private sProject: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Project(this.nameE, this.descriptionE);
    this.sProject.save(pro).subscribe(
      data => {
        alert("Proyecto añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        console.log(err)
        this.router.navigate(['']);
      }
    )
  }

}
