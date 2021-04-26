
function App02() {
    return(
<div>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
  <title>Document Leaflet</title>

  <div style={{width: '60%'}}><a style={{color: 'purple'}} href="https://thierrycohnen.github.io/MapRoutes/">https://thierrycohnen.github.io/MapRoutes/</a> <br /> &nbsp;&nbsp; est un programme de recherche d'itinéraires dans une ville. Il permet de choisir parmi des dizaines de milliers
    de villes dans le monde et ensuite de choisir des points d'intérêts parmi ces 3 catégories: cafés, restaurants, cinémas.<br />
    <br /> &nbsp;&nbsp;On peut ajouter les points d'intérêts les uns après les autres en cliquant sur leur icône et en les ajoutant à l'itinéraire. Quand tous les points d'intérêts sont choisis, il suffit de cliquer sur 'Get directions' et l'application
    trace l'itinéraire pédestre le plus court en notant les étapes à suivre ainsi que la distance à parcourir pour chaque étape.<br /><br /> Code source disponible sur: <a style={{color: 'purple'}} href="https://github.com/ThierryCohnen/MapRoutes">https://github.com/ThierryCohnen/MapRoutes</a></div>
  <div id="grid01">
    <div className="btn-cafes">
      <div>
        <label className="countrySelect" id="countrySelect01" htmlFor="countrySelect">Choose a country:</label>
        <label className="citySelect" id="citySelect01" htmlFor="citySelect">Choose a city:</label>
      </div>
      <div>
        <select id="countrySelect" onchange="countrySelected()" />
        <select id="citySelect" onchange="citySelected()" />
      </div>
      <div>
        <button className="button-open" id="button01-01" value="cafe" onclick="myFunction(this.value)">V</button><span>&nbsp;cafes</span>
        <button className="button-close" id="button01-02" value="cafe" onclick="myFunction2(this.value)">X</button>
        <button className="button-open" id="button01-03" value="restaurant" onclick="myFunction(this.value)">V</button><span>&nbsp;restaurants</span>
        <button className="button-close" id="button01-04" value="restaurant" onclick="myFunction2(this.value)">X</button>
        <button className="button-open" id="button01-05" value="cinema" onclick="myFunction(this.value)">V</button><span>&nbsp;cinemas</span>
        <button className="button-close" id="button01-06" value="cinema" onclick="myFunction2(this.value)">X</button>
        <br />
        <br />
        <button className="button-open" id="button01-07" onclick="{mymap.removeLayer(cities);cities.clearLayers();document.getElementById('route-narrative').innerHTML='';document.getElementById('cafes03').innerHTML='Distance:';myFunction1(0);}">V &nbsp;Get directions</button>
        <button className="button-close" id="button01-08" onclick="{mymap.removeLayer(cities);cities.clearLayers();document.getElementById('route-narrative').innerHTML='';document.getElementById('cafes03').innerHTML='Distance:';}">X &nbsp;Remove directions</button>
      </div>
      <div className="cafes">
        <ul className="cafes23" id="cafes02" style={{backgroundColor: 'rgba(40, 201, 134, 0.63)'}}> </ul>
        <ul className="cafes23" id="cafes03" style={{backgroundColor: 'rgb(81, 226, 159)'}}>Distance:</ul>
        <div style={{overflow: 'auto', width: 400, height: 450}} id="route-narrative"><br />Route:</div>
        <ol className="cafes23" id="cafes" style={{backgroundColor: 'rgb(211, 209, 113)', visibility: 'hidden'}}>cafes</ol>
      </div>
    </div>
    <div className="mapid01" id="mapid">
    </div>
  </div>
</div>

    )}

    export default App02;