import React, {useState} from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, Image, TextInput, TouchableHighlight} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import DayButton from "./Assets/Components/DayButton";
import Header from "./Assets/Components/Header";
import TimeDisplay from "./Assets/Components/TimeDisplay"
import { styles } from "./Assets/Styles/app-styles";
import Instructions from "./Assets/Components/Instructions";

const days = new Map([
  ['M', Boolean(false)],
  ['T', Boolean(false)],
  ['W', Boolean(false)],
  ['Th', Boolean(false)],
  ['F', Boolean(false)],
  ['S', Boolean(false)],
  ['Su', Boolean(false)],
])

export default App = () => {
  const shows = require('./Assets/Data/ShowData.json');

  // User Input
  const [availableDays, setAvailableDays] = useState(0);
  const [availableHours, setAvailableHours] = useState(0);

  // Selected Show
  const [show, setShow] = useState(shows[0]);
  const [imagePath, setImagePath] = useState(show.imagePath)

  // Result
  const [resultDays, setResultDays] = useState(0);
  
  const getDays = () => {
    setAvailableDays(0);

    days.forEach((day, dayName) => {
      if (days.get(dayName) == Boolean(true)) {
        console.log(dayName + ": " + " is true");
        setAvailableDays(aDays => aDays + 1)
      }
    });
  }

  const handleShowSelect = (show) => {
    setShow(show);
    setImagePath(show.imagePath);
  }
  const handleOnPressExtra = (day) =>{
    // Switches boolean
    if (days.get(day) == Boolean(true)) 
      days.set(day, Boolean(false))
    else 
      days.set(day, Boolean(true))

    // Gets day count
    getDays();
  }

  // Formula for calculating the days
  const calculate = () => {
    let runTimeMinutes = (show.useRuntime)? show.runtime : 
      ((show.EpLengthMax + show.EpLengthMin) / 2) * show.EpCount; // Approximates runtime

    // Guard for invalid data
    if (runTimeMinutes <= 0 || availableDays <= 0 || availableHours <= 0) return;
    
    let minimumDays = Math.ceil((runTimeMinutes / 60) / availableHours);
    console.log("Minimum Days: " + minimumDays);

    let totalDays = minimumDays + ((7 - availableDays) * (minimumDays - availableDays));

    setResultDays(totalDays);
  }

  return(
    <>
    <Instructions />
    <LinearGradient colors={['#000000', '#221F1F', '#221F1F']} locations={[0, 0.3, 1]} style={styles.background}>
    <Header/>
    <View style={styles.container}>
      <View style={styles.partContainer}>
        <Picker
          selectedValue={show}
          onValueChange={(show, showIndex) => handleShowSelect(show)}
          style={styles.pickerText}
          dropdownIconColor={'#fff'}
          >
            {/**This allows us to display all the shows */}
            {shows.map((show, index) => {
              return <Picker.Item key={index} label = {show.Title} value={show} />
            })}
        </Picker>
        <Image  style={styles.image} resizeMethod='resize' resizeMode='cover' source={{uri: imagePath}} />
      </View>

      {/** Days Selection */}
      <View style={styles.partContainer}>
        <Text style={styles.subHeading}>Days you can watch</Text>
        <View style={styles.partContainer}>
          <View style={styles.daysContainer}>
            <DayButton label='M' onPressExtra={() => handleOnPressExtra('M')}></DayButton>
            <DayButton label='T' onPressExtra={() => handleOnPressExtra('T')}></DayButton>
            <DayButton label='W' onPressExtra={() => handleOnPressExtra('W')}></DayButton>
            <DayButton label='Th' onPressExtra={() => handleOnPressExtra('Th')}></DayButton>
            <DayButton label='F' onPressExtra={() => handleOnPressExtra('F')}></DayButton>
            <DayButton label='S' onPressExtra={() => handleOnPressExtra('S')}></DayButton>
            <DayButton label='Su' onPressExtra={() => handleOnPressExtra('Su')}></DayButton>
          </View>
        </View>
      </View>

      {/** Hours available per day */}
      
      <View style={styles.partContainer}>
        
      <Text style={styles.subHeading}>Hours available per day</Text>
        <TextInput 
        onChangeText={setAvailableHours}
        style={styles.textInput}
         placeholder="Hours" 
         placeholderTextColor='#ccc'
         keyboardType='numeric' 
         textAlign='center'></TextInput>
        </View>
    </View>

    {/** Displays result */}
    <View style={styles.answerBox}>
    <TouchableHighlight 
      title='Calculate' 
      style={styles.button}
      onPress={calculate}><Text style={styles.buttonText}>Calculate</Text></TouchableHighlight>
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>Once started, you'll finish the show in..</Text>
        <View>
          <TimeDisplay label="Days" time={resultDays}></TimeDisplay>
        </View>
      </View>
    </View>
    </LinearGradient>
    </>
  )
}