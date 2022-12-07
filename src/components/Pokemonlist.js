const [ pokemons, setPokemons ] = useState([]);

//va s'executer seulement au lancement du composant (dep: [])
useEffect(async () => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemons = await getAll();
  setPokemons(pokemons);
},[]);


    return <div className="pokemon-list">
    <div class="flex">
      {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button>
          </div>
        })
      }
     </div>
</div>;



