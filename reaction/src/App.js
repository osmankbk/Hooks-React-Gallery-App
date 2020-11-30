/* Treehouse FSJS Techdegree
 * Project 7 - React Gallery App
 * App.js
  Goal: Exceed Expectation
  */


//Imported the necessary files and component to put my app together
import React, { useContext } from 'react';
import { Context } from './Context';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Search from './Search';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

import FourOFour from './FourOFour';

const App = () => {

  const { images,
          cats, 
          flowers, 
          atumn, 
          loading, 
          result,
          actions 
          } = useContext(Context);
  const searchImages = actions.searchImages1;

 

  return (
    <BrowserRouter>
      <div className="container">
        <Search
        searchBar={searchImages}
           />
        <Navigation
          searchPut={searchImages}
          />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer
              loading={loading}
              data={images}
              title={result}
              /> } />
              <Route path="/search" render={ () => <PhotoContainer
                loading={loading}
                data={images}
                title={result}
                /> } />
               <Route path="/cats" render={ () => <PhotoContainer
                data={cats}
                title={'Cats'}
                /> } />
               <Route path="/flowers" render={ () => <PhotoContainer
                data={flowers}
                title={'Flowers'}
                /> } />
               <Route path="/atumn" render={ () => <PhotoContainer
                data={atumn}
                title={'Atumn'}
                /> } />
                <Route component={FourOFour}/>
          </Switch>
      </div>
    </BrowserRouter>
  );


}

export default App;
