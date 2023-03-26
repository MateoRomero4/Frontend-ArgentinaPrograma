import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project';

@Component({
  selector: 'app-editproject',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project = null;
  
  constructor(
    private projectS: ProjectService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.detail(id).subscribe(
      data =>{
        this.project = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.update(id, this.project).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la project");
        this.router.navigate(['']);
      }
    )
  }
}
