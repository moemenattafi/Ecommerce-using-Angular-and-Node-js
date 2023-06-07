import { Component } from '@angular/core';
import { ManClothingService } from 'src/app/services/man-clothing.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class MenComponent {
  constructor(private manClothing:ManClothingService){}
  clothes:any;
  ngOnInit(): void {
    this.manClothing.getAllManClothing().subscribe((res)=>{
      this.clothes=res;
    })
  }

}
