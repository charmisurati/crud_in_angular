<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","crudexample");
    
	$id = $_REQUEST["id"];
	
    $query1 = "select * from tblform where id= '$id'";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $p[] = $row;
    }
    
    echo json_encode($p);
?>
