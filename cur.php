<?php  
$a = "A";

if (isset($a) && !empty($a)) {
	 echo "OK"."<br>";

};

//$semana = array("lunes", "Martes", "Miercoles", "Jueves", "Viernes");
//foreach ($semana as $indice => $valor) {
//	echo $indice." - ". $valor . "<br>" ;}

	

$semana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

echo $semana[3];


?>