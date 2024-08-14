import { Component, OnInit } from '@angular/core';
import { Jeux } from '../Jeux';
import { JEUX } from '../Liste_Jeux';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-page-jeux',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './page-jeux.component.html',
  styleUrl: './page-jeux.component.css'
})
export class PageJeuxComponent implements OnInit {
  private url = "http://localhost:8085/cart"
  Liste_Jeux = JEUX;
  jeux?:Jeux 
  mainImageJeux:string = ""
  constructor(private route:ActivatedRoute ,private router:Router){}
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
    this.changeImgBackground()
  }
  ngOnDestroy():void{
    const img = document.querySelector('.backgroundHeader') as HTMLImageElement
    img.src = "/assets/wow-shadowlands.jpg"
  }
  changeImgBackground(){
    const img = document.querySelector('.backgroundHeader') as HTMLImageElement
    console.log(img);
    
    if(this.jeux){
      img.src = this.jeux.image[Math.floor(Math.random()*this.jeux.image.length)]
    }
  }
  addToCart(){
    const game = this.jeux
    // console.log(game)
    fetch(this.url + "?game="+ game?.id, {
      method: "GET",
      credentials: "include"
    })
    this.router.navigate(["/"]);
    
  }
}
