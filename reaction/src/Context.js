import React, { useState, useEffect} from 'react';
import axios from 'axios';
import apiKey from './config';
export const Context = React.createContext();

export const Provider = (props) => {

    const [images, setImages ] = useState([]);
    const [cats, setCats ] = useState([]);
    const [flowers, setFlowers ] = useState([]);
    const [atumn, setAtumn ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [result, setResult ] = useState('');
  
    //I request and load the home and default topics when the page first loads, i don't have to reload new data each time
      useEffect(() => {
      searchImagesFour('leaves');
      searchImagesThree('flowers');
      searchImagesTwo('cats');
      searchImages('dogs');
  
      }, [])
      
  
      
  
  const searchImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setLoading(false);
        setImages(response.data.photos.photo);
        setResult(query);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  //My function API request functions
  const searchImagesTwo = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setLoading(false);
        setCats(response.data.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  const searchImagesThree = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setLoading(false);
        setFlowers(response.data.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  const searchImagesFour = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setLoading(false);
        setAtumn(response.data.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
    return(
        <Context.Provider value={{
            images,
            cats,
            flowers,
            atumn,
            loading,
            result,
            actions: {
                searchImages1: searchImages,
                searchImages2: searchImagesTwo,
                searchImages3: searchImagesThree,
                searchImages4: searchImagesFour,
            }
        }}>
           {props.children} 
        </Context.Provider>
    )
}