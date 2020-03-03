import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isSubmitted = false;


  ordersData = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  addform:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private nav:Router) { }

 hobby:any=[];
   ngOnInit() {

    this.addform=this.fb.group({
     uname:['',[Validators.required]],
     address:['',Validators.required],
     singing:['',Boolean],
     painting:['',Boolean],
     gender:[''],
     number:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
     email:['',[Validators.required,Validators.email]],
     orders: new FormArray([])

      
    })

    this.addCheckboxes();
    }


    private addCheckboxes() {
      this.ordersData.forEach((o, i) => {
        const control = new FormControl(i === 0); // if first item set to true, else false
        (this.addform.controls.orders as FormArray).push(control);
      });
    }



    // minSelectedCheckboxes(min = 1) {
    //   const validator: ValidatorFn = (formArray: FormArray) => {
    //     const totalSelected = formArray.controls
    //       // get a list of checkbox values (boolean)
    //       .map(control => control.value)
    //       // total up the number of checked checkboxes
    //       .reduce((prev, next) => next ? prev + next : prev, 0);
    
    //     // if the total is not greater than the minimum, return the error message
    //     return totalSelected >= min ? null : { required: true };
    //   };
    
    //   return validator;
    // }
    submitform(){



      const selectedOrderIds = this.addform.value.orders
      .map((v, i) => (v ?  this.ordersData[i].id : null))
      .filter(v => v !== null);

      var strhob  = "";
       for(var i =0;i<selectedOrderIds.length; i++)
       {
         
           strhob += selectedOrderIds[i] + ",";

       }

    console.log(selectedOrderIds);

    console.log(strhob);
      const uploadData= new FormData();
      var name= this.addform.value.uname;
      var address=this.addform.value.address;
      var number=this.addform.value.number;
      var email=this.addform.value.email;
      var gender=this.addform.value.gender;
      var hobby=this.addform.value.hobby;

      uploadData.append("name",name);
      uploadData.append("hobbies",strhob);
      uploadData.append("email",email);
      uploadData.append("address", address);
      uploadData.append("number",number);
      uploadData.append("gender",gender);


      this.http.post("http://localhost/crudexample/addform.php",uploadData).subscribe(resp=>{
        console.log(resp);

         var dic=resp[0];
         var status=dic["status"];

         if(status=="success")
         {
           alert("success");

          // this.nav.navigateByUrl("/view");
           
         }
      })
      
    }
    
  }


