

let placas=[];

let registrar= function(){
	let placa=document.getElementById("placa").value;
	let registrado=document.getElementById("registrado");
	placas.push(placa);

	for (let i = placas.length; i <= 1; i++) {
		let contenido = document.createElement("h1");
		contenido.appendChild(contenido);
		registrado.appendChild(contenido);
		
	}
	

}