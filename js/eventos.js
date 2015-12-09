//funcion inicial
var inicioApp =function ()
{
 var altas = function()
 {
 	$("body > section").hide("slow");
 	$("#secAltaAlumnos").show("slow");
 }
 var GuardaAltaAlumno=function()
 {
 	var ncontrol=$("#txtNumControl").val();
 	var nombres=$("#txtNombres").val();
 	var apellidop=$("#txtApellidoPat").val();
 	var apellidom=$("#txtApellidoMat").val();
 	var carrera=$("#txtClaveCarrera").val();
 	var semestre=$("#txtSemestre").val();
 	var promedio=$("#txtPromedio").val();
 	var estatus=$("#txtEstatus").val();
 	 var parametros="orden=GuardaAltaAlumno"+"&ncontrol="+ncontrol+"&nombres="+nombres+"&apellidop="+apellidop+"&apellidom="+apellidom+"&carrera="+carrera+"&semestre="+semestre+"promedio="+promedio+"&estatus="+estatus;
 	//conexion con PHP
 	 $.ajax({
 	 	cache:false, // lo desactivamos para  que no se repitan
 	 	type:"POST", //que tipo lo vamos a enviar
 	 	datatype:"json",
 	 	url: "php/funciones.php",
 	 	data: parametros,
 	 	succes: function(response){// nosva a dar una respuesta si todo salio bien
 	 		if(response.respuesta) // tambien se puede poner if(response.respuesta==true)
 	 		{
 	 			alert("Registro guardado");
 	 		}
 	 		else 
 	 		{
 	 			alert("No se pudo guardar");
 	 		}
 	 	},
 	 	error:function(xhr,ajaxOptions,thrownError){ // si ahi error CONSOLA ES PARA ERROR EN JAVASCRIPT Y NETWORK PARA PHP
 	 		console.log("Ocurre un error");
 	 	}


 	 });
 }
 var bajas=function()
 {
 	$("body > section").hide("slow");
 	$("#secBajaAlumnos").show("slow");
 }
 var BajaAlumno=function()
{
	
 	var ncontrol=$("#txtNumControl3").val();
 	
 	 var parametros="orden=BajaAlumno"+"&ncontrol="+ncontrol;
 	//conexion con PHP
 	 $.ajax({
 	 	cache:false, // lo desactivamos para  que no se repitan
 	 	type:"POST", //que tipo lo vamos a enviar
 	 	datatype:"json",
 	 	url: "php/funciones.php",
 	 	data: parametros,
 	 	succes: function(response){// nosva a dar una respuesta si todo salio bien
 	 		if(response.respuesta) // tambien se puede poner if(response.respuesta==true)
 	 		{
 	 			alert("Registro Eliminado");
 	 		}
 	 		else 
 	 		{
 	 			alert("No se pudo Eliminar");
 	 		}
 	 	},
 	 	error:function(xhr,ajaxOptions,thrownError){ // si ahi error CONSOLA ES PARA ERROR EN JAVASCRIPT Y NETWORK PARA PHP
 	 		console.log("Ocurre un error");
 	 	}


 	 });
 }
 var cambios=function ()
 {
 	$("body > section").hide("slow");
 	// $("#secAltaAlumnos").hide("slow");
 	$("#secCambioAlumnos").show("slow");
  }
var GuardaCambioAlumno=function(){
	var ncontrol=$("#txtNumControl2").val();
 	var nombres=$("#txtNombres2").val();
 	var apellidop=$("#txtApellidoPat2").val();
 	var apellidom=$("#txtApellidoMat2").val();
 	var carrera=$("#txtClaveCarrera2").val();
 	var semestre=$("#txtSemestre2").val();
 	var promedio=$("#txtPromedio2").val();
 	var estatus=$("#txtEstatus2").val();
 	 var parametros="orden=GuardaCambioAlumno"+"&ncontrol="+ncontrol+"&nombres="+nombres+"&apellidop="+apellidop+"&apellidom="+apellidom+"&carrera="+carrera+"&semestre="+semestre+"promedio="+promedio+"&estatus="+estatus;
 	//conexion con PHP
 	 $.ajax({
 	 	cache:false, // lo desactivamos para  que no se repitan
 	 	type:"POST", //que tipo lo vamos a enviar
 	 	datatype:"json",
 	 	url: "php/funciones.php",
 	 	data: parametros,
 	 	succes: function(response){// nosva a dar una respuesta si todo salio bien
 	 		if(response.respuesta) // tambien se puede poner if(response.respuesta==true)
 	 		{
 	 			alert("Registro Actualizado");
 	 		}
 	 		else 
 	 		{
 	 			alert("No se pudo Actualizado");
 	 		}
 	 	},
 	 	error:function(xhr,ajaxOptions,thrownError){ // si ahi error CONSOLA ES PARA ERROR EN JAVASCRIPT Y NETWORK PARA PHP
 	 		console.log("Ocurre un error");
 	 	}


 	 });
}
 	var consulta=function();
 	{
 		$("body > section").hide("slow");
 	// $("#secAltaAlumnos").hide("slow");
 	$("#secConsultaAlumnos").show("slow");
 	}

 //cuando damos click en el boton btnAltas
 //Se dispara la funcion: altas
 $("btnConsultas").on("click",consultas);
 $("#btnCambios").on("click",cambios);
 $("#btnBajas").on("click",bajas);
 $("#btnAltas").on("click",altas);
 $("#frmAltaAlumnos").on("submit",GuardaAltaAlumno);
 $("#frmBajaAlumno").on("submit",BajaAlumno);
 $("#frmCambioAlumnos").on("submit",GuardaCambioAlumno);
 $("#frmConsultaAlumnos").on("submit",GuardaConsultaAlumno);
//al estar listo el documento dispara la funcion inicial.

}
$(document).on("ready",inicioApp);