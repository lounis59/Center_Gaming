import { Component, OnInit } from '@angular/core';
import { Jeux } from '../Jeux';
import { JEUX } from '../Liste_Jeux';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-jeux',
  standalone: true,
  imports: [],
  templateUrl: './page-jeux.component.html',
  styleUrl: './page-jeux.component.css'
})
export class PageJeuxComponent implements OnInit {
  Liste_Jeux = JEUX;
  jeux?:Jeux 
  mainImageJeux:string = ""
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get('id')
    
    id = parseInt(id??"")
    this.jeux = this.Liste_Jeux.find((jeux)=>{
      return jeux.id===id
    })
    console.log(this.jeux);
    if(this.jeux){

      this.mainImageJeux = this.jeux.image[0]
    }
  }
}
