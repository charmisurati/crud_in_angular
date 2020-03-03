import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder} from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { Clsform } from '../clsform';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editform:FormGroup;
  id:"";
  uname:"";
  email:"";
  address:"";
  number:"";
//singing:"";
 // painting:"";
  gender:"";

  array= {};



  

  constructor(private rout:ActivatedRoute,private http:HttpClient,private fb:FormBuilder) { }
  


  ngOnInit() {


    
    this.editform=this.fb.group({
    //  id:[''],
      uname:[''],
      email:[''],
      address:[''],
      number:[''],
      gender:['']

    });




    this.id=this.rout.snapshot.params["id"];
    alert(this.id);
   
    this.http.get("http://localhost/crudexample/getdatabyid.php?id="+this.id).subscribe(resp=>{
    
    
      this.array=<Clsform[]>resp;
      console.log(resp);

      var ss = this.array[0];

      this.id=ss["id"];
      this.uname=ss["name"];
      this.email=ss["email"];
    this.address=ss["address"];
    this.number=ss["number"];
    this.gender=ss["gender"];

    this.editform=this.fb.group({
      id:[this.id],
      uname:[this.uname],
      email:[this.email],
      address:[this.address],
      number:[this.number],
      gender:[this.gender]

    });


    });
  



  }

  editsubmitform(){

  }

}
