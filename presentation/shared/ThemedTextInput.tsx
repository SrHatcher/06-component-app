import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface Props  extends TextInputProps{
    classname?: string
}


const ThemedTextInput = ({className, ...rest}:Props) => {
  return (
    <TextInput 
        {...rest}
        className={[
            "py-4 px-2 text-black dark:text-white",
            className
        ].join(" ")}
        placeholderTextColor={"gray"}
    />
  )
}

export default ThemedTextInput