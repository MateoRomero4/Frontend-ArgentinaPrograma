import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { banner } from 'src/app/model/banner';
import { ImageBannerService } from 'src/app/service/image-banner.service';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  banner: banner = null;

  constructor(private activatedRouter : ActivatedRoute, private  bannerService: BannerService,
     private router: Router, public imageBannerService: ImageBannerService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerService.detail(id).subscribe(
      data =>{
        this.banner = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.banner.img = this.imageBannerService.url;
    this.bannerService.update(id, this.banner).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el banner");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "banner_" + id;
    this.imageBannerService.uploadImage($event, name)
  }

}
