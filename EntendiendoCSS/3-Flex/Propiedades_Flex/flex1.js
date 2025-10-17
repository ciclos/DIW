/* Recogemos el contenedor de los elementos*/
var contenedor = document.querySelector("#contenedor");    

/* Añade elementos al contenedor
 */
function addElemento(cantidad){
	
	for (var i = 0; i < cantidad; i++) {
		var elemento = contenedor.appendChild(document.createElement("div"));
		
		/* Podemos modificar el grow y el shrink de todos los elementos pinchando en ellos*/
		elemento.addEventListener("click", 
			function(event) {
				this.style.flexGrow = document.querySelector("#grow").value;
				this.style.flexShrink = document.querySelector("#shrink").value;
			});		
	}
}
		
addElemento(10);

document.querySelector("#mas").addEventListener("click",
	function(){
		addElemento(1);
	});

document.querySelector("#izquierda").addEventListener("click",
	function(){
		var ancho = document.querySelector(".flecha").offsetWidth;
		document.querySelector(".flecha").style.width = (ancho*0.9)+"px";
		contenedor.style.width = (ancho*0.9)+"px";

	});

document.querySelector("#abajo").addEventListener("click",
	function(){
		var alto = contenedor.offsetHeight;
		contenedor.style.height = (alto+alto)+"px";
	});

document.querySelector("#fd").addEventListener("change", 
	function() {
		contenedor.style.flexDirection = document.querySelector("#fd").value;
	});


document.querySelector("#wp").addEventListener("change", 
	function() {
		contenedor.style.flexWrap = document.querySelector("#wp").value;
	});

document.querySelector("#jc").addEventListener("change", 
	function() {
		contenedor.style.justifyContent = document.querySelector("#jc").value;
	});

document.querySelector("#ai").addEventListener("change", 
	function() {
		contenedor.style.alignItems = document.querySelector("#ai").value;
	});

document.querySelector("#ac").addEventListener("change", 
	function() {
		contenedor.style.alignContent = document.querySelector("#ac").value;
	});

document.querySelector("#circulo").addEventListener("change", 
	function() {
		if( document.querySelector("#circulo").checked){
			var elementos = document.querySelectorAll("#contenedor div");
			for(i=0; i < elementos.length;i++){
				elementos[i].style.borderRadius = "100%";
			}
		}
	});

document.querySelector("#cuadrado").addEventListener("change", 
	function() {
		if( document.querySelector("#cuadrado").checked){
			var elementos = document.querySelectorAll("#contenedor div");
			for(i=0; i < elementos.length;i++){
				elementos[i].style.borderRadius = "0%";
			}
		}
	});


