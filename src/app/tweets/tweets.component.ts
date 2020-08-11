import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  searchResult: string;
  likesResult: number;
  menuResult: number;

  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }

  ngOnInit() {
  }

  onChange(input: string){
    this.searchResult = input;
  }

  onLikesChange(input: number){
    this.likesResult = input;
  }

  onMenuChange(input: number){
    this.menuResult = input;
  }

}
