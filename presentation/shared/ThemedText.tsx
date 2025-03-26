import { View, Text, TextProps } from 'react-native'
import React from 'react'

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "bold" | "link";

interface Props extends TextProps{
    className?: string;
    type?: TextType;
}

const ThemedText = ({type, className, ...rest}:Props) => {

  return (
    <Text 
    className={
        [
            "text-light-text dark:text-dark-text",
            type === "normal" && " text-light-success",
            type === "h1" && "font-bold text-3xl",
            type === "h2" && "font-bold text-xl",
            type === "semi-bold" && "font-semibold",
            type === "bold" && "font-bold",
            type === "link" && "underline",
            className
        ].join(" ")}
    {...rest}
    >
        {rest.children}
    </Text>
  )
}

export default ThemedText