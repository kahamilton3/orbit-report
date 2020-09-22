import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit() {
  }

  getTypeOccurence(type: string, list: Satellite[]) {
    let occurs = 0;
    for (let i=0; i<list.length; i++) {
      if ( list[i].type === type ) {
         occurs += 1;
    }
  }
  return occurs;
 }

}
