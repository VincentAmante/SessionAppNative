import React, {useState, useEffect} from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, Image, TextInput, TouchableHighlight} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SplashScreen from "react-native-splash-screen";

import DayButton from "./Assets/Components/DayButton";
import Header from "./Assets/Components/Header";
import TimeDisplay from "./Assets/Components/TimeDisplay"
import { styles } from "./Assets/Styles/app-styles";
import Instructions from "./Assets/Components/Instructions";
  
// Days of the week
const days = new Map([
  [0, Boolean(false)],
  [1, Boolean(false)],
  [2, Boolean(false)],
  [3, Boolean(false)],
  [4, Boolean(false)],
  [5, Boolean(false)],
  [6, Boolean(false)],
])

export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const shows = require('./Assets/Data/ShowData.json');

  // User Input
  const [availableDays, setAvailableDays] = useState(0);
  const [availableHours, setAvailableHours] = useState(0);
  const [startDay , setStartDay] = useState(1);

  // Selected Show
  const [show, setShow] = useState(shows[0]);
  const [imagePath, setImagePath] = useState(show.imagePath)

  // Result
  const [resultDays, setResultDays] = useState(0);
  
  const getDays = () => {
    
    setAvailableDays(0);

    days.forEach((day, dayName) => {
      if (days.get(dayName) == Boolean(true)) {
        setAvailableDays(aDays => aDays + 1)
      }
    });
  }

  const handleShowSelect = (show) => {
    console.log("Changed Show");
    setShow(show);
    setImagePath(show.imagePath);
  }

  const handleOnPressExtra = (day) =>{
    // Switches boolean
    if (days.get(day) == Boolean(true)){
      days.set(day, Boolean(false));
    } 
    else {
      days.set(day, Boolean(true));
    }
    // Gets day count
    getDays();
  }

  const canStart = (day) => {
    console.log(days.get(day) == Boolean(true))
    return (days.get(day) == Boolean(true));
  }

  // Formula for calculating the days
  const calculate = () => {
    // Acquires runtime
    let runTimeMinutes = (show.useRuntime)? show.runtime : 
      ((show.EpLengthMax + show.EpLengthMin) / 2) * show.EpCount; // Approximates runtime
    
  // Guard for invalid data
    if (runTimeMinutes <= 0 || availableDays <= 0 || availableHours <= 0) return;

    let minimumDays = Math.ceil((runTimeMinutes / 60) / availableHours);

    let extraDays = 0;
    // Calculates Extra Days
    // TODO: Add logic for spaces between days
    if (minimumDays > availableDays){
      extraDays = (7 - availableDays) * (minimumDays - availableDays)
    };

    let totalDays = minimumDays + extraDays;

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
            <DayButton label='M' onPressExtra={() => handleOnPressExtra(0)}></DayButton>
            <DayButton label='T' onPressExtra={() => handleOnPressExtra(1)}></DayButton>
            <DayButton label='W' onPressExtra={() => handleOnPressExtra(2)}></DayButton>
            <DayButton label='Th' onPressExtra={() => handleOnPressExtra(3)}></DayButton>
            <DayButton label='F' onPressExtra={() => handleOnPressExtra(4)}></DayButton>
            <DayButton label='S' onPressExtra={() => handleOnPressExtra(5)}></DayButton>
            <DayButton label='Su' onPressExtra={() => handleOnPressExtra(6)}></DayButton>
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