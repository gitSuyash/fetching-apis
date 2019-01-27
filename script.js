const body = document.getElementById('root');
var request = new XMLHttpRequest();
request.open("GET","https://ghibliapi.herokuapp.com/films");
request.onload =()=>{
	var response = JSON.parse(request.responseText);
	response.forEach(movie=>{
		
		const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const i = document.createElement('i');

      const h1 = document.createElement('h1');
      i.textContent = movie.title;
      const br = document.createElement('br');

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      body.appendChild(card);
      card.appendChild(h1);
      h1.appendChild(i);
      card.appendChild(br);
      card.appendChild(p);

	})
};
request.send();