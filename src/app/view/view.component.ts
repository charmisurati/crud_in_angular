import { Component, OnInit } from '@angular/core';
import { Clsform } from '../clsform';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  arr=new Array<Clsform>();

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getdata();
    
  }

  getdata(){

    this.http.get("http://localhost/crudexample/viewform.php").subscribe(resp=>{
      this.arr=<Clsform[]>resp;
    })

    
  }

  delete(id){

    this.http.get("http://localhost/crudexample/deleteform.php?id="+id).subscribe(resp=>{
      var dic=resp[0];
      var status=dic["status"];
      if(status=="success")
      {
        alert("deleted..");
        this.getdata();
      }
    })
  }
}
