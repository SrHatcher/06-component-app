import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';

interface Props extends PressableProps{
    className?: string;
    children: string;
}

const ThemedButton = ({className, children, ...rest}:Props) => {
  return (
    <Pressable
    {...rest}
    className={[
        "bg-dark-primary dark:bg-light-primary items-center rounded-xl px-6 py-2 active:opacity-70",
        "",
        className
    ].join(" ")}
    >
        <ThemedText>{children}</ThemedText>
    </Pressable>
  )
}

export default ThemedButton