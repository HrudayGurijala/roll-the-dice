import { ImageSourcePropType, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

//Use the inbuilt vibration function



import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};



export default function App() : JSX.Element{
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rolledDice = ()=>{
    const arr =[DiceFive, DiceFour, DiceOne,DiceSix,DiceThree,DiceTwo]

    const presentDice = Math.floor(Math.random() * 6) 

    setDiceImage(arr[presentDice])
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Text style={styles.rollDiceBtnText} onPress={rolledDice} >Roll the dice</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})