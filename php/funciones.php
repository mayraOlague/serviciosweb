<?php

function GuardaAltaAlumno()
{
	$nco ="'".$_POST["ncontrol"]."'";
	$nom ="'".$_POST["nombres"]."'";
	$app ="'".$_POST["apellidop"]."'";
	$apm ="'".$_POST["apellidom"]."'";
	$car = $_POST["carrera"];
	$sem = $_POST["semestre"];
	$pro = $_POST["promedio"];
	$est ="'".$_POST["estatus"]."'";
	$con = mysql_connect("localhost","root","");
	mysql_select_db("pw10");
	$consulta=sprintf("insert into alumnos values (%s,%s,%s,%s,%d,%d,%d,%s)",$nco,$nom,$app,$apm,$car,$sem,$pro,$est);
	mysql_query($consulta);
	$respuesta= false; //enviar al JS
	if (mysql_affected_rows()>0)
	{
		$respuesta= true;
	} 
	//enviamos los datos al JavaScript
	$salidaJSON= array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$orden= $_POST["orden"];
switch ($orden) {
	case 'GuardaAltaAlumno':
		GuardaAltaAlumno();
		break;
	
	default:
		# code...
		break;
}
function BajaAlumno()
{
	$nco ="'".$_POST["ncontrol"]."'";
	$con = mysql_connect("localhost","root","");
	mysql_select_db("pw10");
	$consulta = sprintf("delete from alumnos where ncontrol=%s",$ncontrol);
		mysql_query($consulta);
		if(mysql_affected_rows() > 0)
			print "Registro eliminado";
		else
			print "El registro no se pudo eliminar";

	}
$orden= $_POST["orden"];
switch ($orden) {
	case 'BajaAlumno':
		BajaAlumno();
		break;
	
	default:
		# code...
		break;

}
?>
