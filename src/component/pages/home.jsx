import React from 'react'
import Banner from '../banner'
import SearchBar from '../searchbar'

import { useHomeFetch } from '../../hooks/useHomeFetch'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../API/config'

const Home = () => {
   const {state,error, searchTerm,setSearchTerm} = useHomeFetch();
   
   if (error) return <div>Something went wrong! </div>

   return (
    <>
    {!searchTerm && state.results[0] ? 
       <Banner
         image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}

          tittle={state.results[0].original_title}

          text={state.results[0].overview}
          />
         : null
      }
      <SearchBar setSearchTerm={setSearchTerm} />
    </>
   );
}

export default Home