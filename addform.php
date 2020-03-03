<?php

header("Access-Control-Allow-Origin:*");

$cn= new mysqli("localhost","root","","crudexample");
 
 $name=$_POST["name"];
 $address=$_POST["address"];
 $email=$_POST["email"];
 $number=$_POST["number"];
 $gender=$_POST["gender"];
 
 $strhob=$_POST["hobbies"];
 //echo $hobbies;
 
 
 $query="insert into tblform (name,address,email,number,gender,hobbies)values('$name','$address','$email','$number','$gender','$strhob')";
 
 if($cn->query($query)){
 
   $pp[]=array("status"=>"success");
   
 }
 else
 {
  $pp[]= array("status"=>"fail");
 }
 
 echo json_encode($pp);
?>