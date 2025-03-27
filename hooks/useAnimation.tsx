import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'



const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({duration = 300, toValue=1, useNativeDriver = true, callBack= ()=>{}})=>{
        Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver
        }).start(callBack);
    }

    const fadeOut = ({duration=300, toValue=0, useNativeDriver=true, easing = Easing.ease, callBack=()=>{}})=>{
        Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing,
        //}).start(()=>animatedTop.setValue(-100));
    }).start(callBack);
    }

    const startMovingTopPosition = ({initialPosition=-100, duration=700, toValue=0, useNativeDriver=true, easing = Easing.linear, callBack=()=>{}})=>{
        animatedTop.setValue(initialPosition)
        
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            //easing: Easing.elastic(10)
            easing: easing
        }).start();
    }
  return {
    //Properties
    animatedOpacity,
    animatedTop,
    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  }
}

export default useAnimation