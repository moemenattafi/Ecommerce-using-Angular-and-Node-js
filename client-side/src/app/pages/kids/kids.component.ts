import { Component } from '@angular/core';
import { KidsClothingService } from 'src/app/services/kids-clothing.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent {
  constructor(private kidsClothing:KidsClothingService){}

  clothes:any;
  
  ngOnInit(): void {
    this.kidsClothing.getAllKidsClothing().subscribe((res)=>{
      this.clothes=res;
    })

  }

}
