import React from 'react'
import Routes from './src/navigation/Routes'
import { ArtistProvider } from './src/context/ArtistContext'
import { AlbumsProvider } from './src/context/AlbümContext';
import { ProfileProvider } from './src/context/ProfilContext';

const App = () => {
  return (
    <ProfileProvider>
    <ArtistProvider>
      <AlbumsProvider>
        <Routes/>
        </AlbumsProvider>
    </ArtistProvider>
    </ProfileProvider>
  )
};
export default App;