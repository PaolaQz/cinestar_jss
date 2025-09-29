const getCines= async () => {
    const id = (new URLSearchParams (window.location.search)).get('id')
    const data = await fetch(`http://localhost/cinestar_sweb_php/cines`)
    if ( data.status ==200){
     const cines = await data.json()
    let html ='<br/><h1>Nuestros Cines</h1><br/>'

    cines.data.forEach(Cine => {
        html += `
				
				<div class="contenido-cine">
	        	    <img src="img/cine/${Cine.id}.1.jpg" width="227" height="170"/>
            	   	<div class="datos-cine">
       				   	<h4>${Cine.RazonSocial}</h4><br/>
                		<span>${Cine.Direccion}<br/><br/>Teléfono:${Cine.Telefonos}</span>
                	</div>
                	<br/>
                	<a href="http://www.cinestar.com.pe/multicines/cine/Cinestar-Excelsior">
                		<img src="img/varios/ico-info2.png" width="150" height="40"/>
                	</a>
				</div>

			</div>
        `   
    });
    document.getElementById('contenido-interno').innerHTML=html
        }
    }


getCines()