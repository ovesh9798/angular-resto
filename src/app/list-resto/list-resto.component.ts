import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  constructor(private resto:RestoService) { }
  collection : any;

  alert:boolean=false
  ngOnInit(): void {

    this.resto.getList().subscribe((result : any)=>{
      console.log(result);
      this.collection=result['data'];
    })
  }
  deleteResto(item:any)
  {
    console.log(this.collection)
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.log(result)
      this.alert=true
    })
  }
  closeAlert()
  {
    this.alert=false
  }

}

