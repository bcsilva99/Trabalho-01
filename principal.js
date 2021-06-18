onload=()=>{
   let filtroMovies = document.querySelector('#filtro_movies');
   let cartazMovies = document.querySelectorAll('#cartaz');
  
   filtroMovies.onchange=()=>{
       let opcao = ['geral','suspense','aventura','drama','infantil'];            
     
       for(i=0;i<cartazMovies.length;i++){

           if(cartazMovies[i].getAttribute('class') != opcao[filtroMovies.selectedIndex]){
            let pai = cartazMovies[i].parentNode;
            pai.style.display='none';
           }
           else{}
       }
    }
   
}
    
