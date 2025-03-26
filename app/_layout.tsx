import { View, Text, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import "../global.css"
import { SplashScreen, Stack } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import { allRoutes } from '@/constants/Routes'

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor({}, "background")
/*
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-regular.ttf')
  })

  useEffect(()=>{
    if(loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded]);
*/

  return (
    <GestureHandlerRootView style={{flex:1, backgroundColor: backgroundColor}}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        
        {/*<ThemedView margin safe={true} bgColor='purple'>  
          <ThemedText type="normal" className='mt-28' numberOfLines={2} >Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Minus facilis culpa, doloribus quisquam corrupti
              nemo doloremque quidem laborum impedit, atque unde a dolor deserunt error 
              quibusdam quo beatae voluptatibus. Minima!</ThemedText>
        </ThemedView> */}
        
      

      <Stack screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {backgroundColor},
        headerStyle: {backgroundColor}
      }}>
        {allRoutes.map(route => (
          <Stack.Screen 
            key={route.name}
            name={route.name}
            options={{title: route.title}}
          />
        ))}
      </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
