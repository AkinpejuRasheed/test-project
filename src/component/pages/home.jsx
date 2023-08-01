import React from 'react'
import Banner from '../banner'
import SearchBar from '../searchbar'
import Grid from '../grid'
import Thumb from '../thumb'
import { useHomeFetch } from '../../hooks/useHomeFetch'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../API/config'

const Home = () => {
   const {state,loading,error, searchTerm,setSearchTerm,setIsLoadingMore} = useHomeFetch();
   
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
   )
  // return (
  //   <>
  //     <Banner image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //       tittle={"Transformers: Rise Of the Beasts"}
  //       text={"lorem, The final Journey is set"} />

  //     <SearchBar searchIcon={<svg width="66" height="68" viewBox="0 0 66 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9281 28C45.9281 37.9014 37.9014 45.9281 28 45.9281C18.0986 45.9281 10.0719 37.9014 10.0719 28C10.0719 18.0986 18.0986 10.0719 28 10.0719C37.9014 10.0719 45.9281 18.0986 45.9281 28ZM42.2002 52.1372C38.0368 54.5918 33.1829 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.1992 53.9854 39.928 50.5751 44.5671L64.0492 58.0413C66.2508 60.2428 66.2508 63.8122 64.0492 66.0137C61.8477 68.2153 58.2783 68.2153 56.0767 66.0137L42.2002 52.1372Z" fill="white" />
  //     </svg>} setSearchTerm={('')} />

  //     <Grid header={"popular movies"}>
  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />

  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />

  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />

  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />


  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />

  //       <Thumb image={"https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"}
  //         movieId={"1"}
  //         clickable={true} />
  //     </Grid>

  //   </>
  // )
}

export default Home