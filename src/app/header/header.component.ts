import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void {
    this.onFetch();
  }

  onSave() {
    this.backEndService.saveData();
  }

  onFetch() {
    console.log('onFetch() called');
    this.backEndService.fetchData(); 
  }

}
