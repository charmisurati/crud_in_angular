<?php

 header("Access-Control-Allow-origin:*");

 $cn= new mysqli("localhost","root","","crudexample");
 
 $query1= "select * from tblform";
 $rows1=$cn->query($query1);
 while ($row = $rows1->fetch_assoc()) {
        
        $p[] = $row;
    }
    
    echo json_encode($p);
?>