//funcion inicial
var inicioApp =function ()
{
 var altas = function()
 {
 	$("#secAltaAlumnos").show("slow");
 }
 var bajas=function()
 {
 	$("#secBajaAlumnos").show("slow");
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
 //cuando damos click en el boton btnAltas
 //Se dispara la funcion: altas
 $("#btnBajas").on("click",bajas);
 $("#btnAltas").on("click",altas);
 $("#frmAltaAlumnos").on("submit",GuardaAltaAlumno);
 $("#frmBajaAlumnos").on("submit",BajaAlumno)
}
//al estar listo el documento dispara la funcion inicial.
$(document).on("ready",inicioApp);