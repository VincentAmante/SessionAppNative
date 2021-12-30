/**
 * Day Button
 *  - Handles a toggle button for the days of the week
 */
import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text  } from 'react-native';

const DayButton = (props) => {
    const [active, setActive] = useState(false);
    const [style, setStyle] = useState(styles.dayButton)
    const [styleText, setStyleText] = useState(styles.dayButton_Text);

    // Actively checks for state changes
    useEffect(() =>{
        if (active){
            setStyle(stylesFocused.dayButton);
            setStyleText(stylesFocused.dayButton_Text);
        }
        else {
            setStyle(styles.dayButton);
            setStyleText(styles.dayButton_Text)
        }
    }, [active])

    const handleOnPress = () =>{
        setActive(!active);
        // Runs extra onPress from parent if it exists
        if (props.onPressExtra != null){ props.onPressExtra(); }
    }

    return(
    <TouchableOpacity onPress={handleOnPress} style={style}>
        <Text style={styleText}>{props.label}</Text>
    </TouchableOpacity>)
}

// Runs style for button when unfocused
const styles = StyleSheet.create({
    dayButton:{
        backgroundColor: '#F5F5F1',
        color:'#000',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    dayButton_Text:{
        color:'#000',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Jost',
        fontWeight:'400',
        fontSize:18,
    }
})


// Runs style for button when focused
const stylesFocused = StyleSheet.create({
    dayButton:{
        backgroundColor: '#E50914',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    dayButton_Text:{
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'Jost',
        fontWeight:'400',
        fontSize:18,
    }
})

export default DayButton;