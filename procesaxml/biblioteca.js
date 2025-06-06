

function descargaArchivo()  {

  console.log("Iniciando descarga...");
  let peticion_http; 

    // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else
    if (window.ActiveXObject) {
      peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
       
      // Preparar la funcion de respuesta
    peticion_http.onreadystatechange = muestraContenido;

      // Realizar peticion HTTP
    peticion_http.open('GET', 'datos.xml', true);
    peticion_http.send(null);

    function muestraContenido() {
      if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
          alert(peticion_http.responseText);
        }
      }
    }
}


function cargarDatos(){
  const promise = fetch("./datos.xml");

  promise.then(function(response) {
    const divContent = document.getElementById("contenedor");
    if (divContent) {
      divContent.innerHTML = response.text;
    }
  });
}

console.log("Cargando archivo de script...");
descargaArchivo();

//window.onload=descargaArchivo;


