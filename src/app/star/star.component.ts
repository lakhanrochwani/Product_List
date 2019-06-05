import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    // console.log(this.rating);
    
    this.starWidth = this.rating * 75 / 5; 
    // console.log("StarWidth",this.starWidth);
    
  }
  onClick(): void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    
  }
  
  

}


















