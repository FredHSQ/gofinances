import React from 'react';

import theme from './scr/global/styles/theme'
import { Dashboard } from './scr/screens/Dashboard';

import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'; 
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }


  return(
    <ThemeProvider theme={theme}>
      <StatusBar style='auto'/>
        <Dashboard/>
    </ThemeProvider>

)}