let arrayGuardar = [],placas,aux=0;

const eliminar0=function(id){ //ELIMINA EL 0 SI ES QUE AUX=0
		if (id.childNodes[0].nodeType==3) {
			id.removeChild(id.firstChild)
			console.log("hola")
		}
}

const Capturar = function(){
    	placas = document.getElementById("placa").value;	//CAPTURO  LOS VALORES DE ENTRADA
     	let registrado=document.getElementById("registrado");// REFERENCIA DEL ELEMENTO DONDE PONDRE LOS DATOS

   		//eliminar0(registrado); //ELIMINA EL 0 SI ES QUE AUX=0
        console.log(placas); 
                   arrayGuardar[aux]=placas;  //GUARDA EN EL ARREGLO LA POSICION  DEPENDIENDO DEL AUX;
           		            

    	let newElement=document.createElement("h1"); //CREO UN NUEVO ELEMENTO 
    	newElement.textContent=arrayGuardar[aux]; // LE AGREGO AL ELEMENTO EL VALOR QUE SE GUARDO EN ESTA POSCICION
    	registrado.appendChild(newElement);  //PONGO EL ELEMENTO CON LA REFERENCIA DE REGISTRADO
    	aux++;  //AUMENTA EL AUX
      		           
        }

    let MateClasico = function(){
   		let intensoJ=document.getElementById("intenso");		//CAPTURO LA REFERENCIA DE INTENSO
   		let registradoJ=document.getElementById("registrado");	//CAPTURO LA REFERENCIA DE REGISTRADOI
    	eliminar0(intensoJ);										//LLAMO A LA FUNCION  PARA ELIMINAR EL 0				

 		let newElement=document.createElement("h1");   //CREA ELEMENTO H1  

    	if (registradoJ.childNodes.length>=1) {			//CONDICION PARA QUE DEJE DE ELIMINAR SI YA NO HAY HIJOS 
		newElement.textContent=registradoJ.firstChild.textContent	     		
		registradoJ.removeChild(registrado.firstChild) 	 	
		}

    	intensoJ.appendChild(newElement);   

    	if(registradoJ.children.length==0){
    		var contenido = document.createTextNode("0");
        	registradoJ.appendChild(contenido);
        }    	
        }
    

