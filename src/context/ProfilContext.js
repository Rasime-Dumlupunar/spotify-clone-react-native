import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {

    const [profilData, setProfilData] =useState(null);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);

    const getProfilData = async () => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/user_profile/',
            params: {
              id: 'nocopyrightsounds',
              playlistLimit: '10',
              artistLimit: '10'
            },
            headers: {
              'x-rapidapi-key': 'ec7ab83db9mshfbdb92ab23b71acp165f45jsn15ea2057d114',
              'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            setProfilData(response.data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
    };

    useEffect(() => {
        getProfilData();
    }, []);
   

    return (
    <ProfileContext.Provider value={{profilData, error, loading}}>
        {children}
    </ProfileContext.Provider>
    )
};