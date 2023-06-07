import { Component } from '@angular/core';
import { WomanClothingService } from 'src/app/services/woman-clothing.service';

@Component({
  selector: 'app-women',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomenComponent {
  constructor(private womanClothing:WomanClothingService){}
  clothes:any;
  ngOnInit(): void {
  this.womanClothing.getAllWomansClothing().subscribe((res)=>{
    this.clothes=res;
  })

  }

}
