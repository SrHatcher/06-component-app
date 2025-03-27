import { View, Text, useColorScheme, StatusBar } from 'react-native'
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

  return (
    <GestureHandlerRootView style={{flex:1, backgroundColor: backgroundColor}}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={colorScheme==="dark" ? "light-content" : "dark-content"}
        translucent={false}
      />

      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>       
      

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
