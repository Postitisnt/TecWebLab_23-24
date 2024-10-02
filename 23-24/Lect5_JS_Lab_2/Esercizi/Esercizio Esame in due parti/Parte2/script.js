function getEventi(){
	let request = new XMLHttpRequest();
	request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/07.06.2022a/api/index.php");
	request.send();
	request.onload = () => {
	console.log(request);
		if (request.status == 200) {
			var eventi = JSON.parse(request.response)
			console.log(eventi);
			var divElenco = document.getElementsByClassName('elenco')[0];
			for(var i=0; i < eventi.length; i++){
				if(eventi[i].evidenza){
					var divRow = document.createElement('div');
					divRow.setAttribute('class', 'evento row');
					
					var divCol = document.createElement('div');
					divCol.setAttribute('class', 'col-md-12 col-lg-3');
					var h4 = document.createElement('a');
					h4.innerHTML = "<h4>" + eventi[i].title + "</h4>"
					h4.setAttribute('href', eventi[i].id)
					var p = document.createElement('p');
					p.innerText = eventi[i].n_biglietti + " Biglietti disponibili"
					divCol.appendChild(h4)
					divCol.appendChild(p)
					divRow.appendChild(divCol)
					
					divCol = document.createElement('div');
					divCol.setAttribute('class', 'col-md-12 col-lg-3');
					p = document.createElement('p');
					p.innerText = eventi[i].time
					divCol.appendChild(p)
					p = document.createElement('p');
					p.innerText = eventi[i].ora_min + ":00"
					divCol.appendChild(p)
					p = document.createElement('p');
					p.innerText = "-"
					divCol.appendChild(p)
					p = document.createElement('p');
					p.innerText = eventi[i].ora_max + ":00"
					divCol.appendChild(p)
					divRow.appendChild(divCol)
					
					divCol = document.createElement('div');
					divCol.setAttribute('class', 'col-md-12 col-lg-3');
					p = document.createElement('p');
					p.innerText = eventi[i].place
					divCol.appendChild(p)
					divRow.appendChild(divCol)
					
					divCol = document.createElement('div');
					divCol.setAttribute('class', 'col-md-12 col-lg-3');
					var a = document.createElement('a');
					a.setAttribute('class', 'btn btn-primary')
					a.setAttribute('href', 'ticket-detail.com')
					a.innerHTML = "Acquista Biglietti"
					divCol.appendChild(a)
					divRow.appendChild(divCol)
					
					
					divElenco.appendChild(divRow);
				}
			}
		} else {
			console.log(`error ${request.status} ${request.statusText}`)
		}
	}
}