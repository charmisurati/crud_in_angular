<?php

    header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","crudexample");
    
    $id  = $_REQUEST["id"];
     $query1 = "DELETE FROM tblform WHERE id='$id'"; 
    if($cn->query($query1))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
    
   

?>
