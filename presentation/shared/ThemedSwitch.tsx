import { View, Text, Pressable, Switch, Platform } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    className?: string;
    valor?: boolean;
    text?: string;
    onValueChange?: (value : boolean) => void
}

const isAndroid = Platform.OS === "android" ;

const ThemedSwitch = ({className, valor, text, onValueChange}:Props) => {
    const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable 
    className={[
        className,
        "flex flex-row items-center justify-between active:opacity-80"
    ].join("")}
    >
    {text ? <ThemedText type='h2'>{text}</ThemedText> : <View/>}
    <Switch 
        value={valor}
        trackColor={{false: "gray", true: switchActiveColor}}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
    />  
    </Pressable>
  )
}

export default ThemedSwitch