/**
 * Time Display
 * - Displays time
 */

import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View, Text  } from 'react-native';



const TimeDisplay = (props) => {
    const [label, setLabel] = useState(props.label);

    useEffect(() => {
        if (props.time == 1){setLabel(label.slice(0, -1))}
        else {setLabel(props.label)}
    }, [props.time])
    
    return(
        <View style={styles.container}>
            <Text style={styles.time}>{props.time}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal:6,
    },
    time:{
        alignSelf:'center',
        fontSize:64,
        textAlign:'center',
        color:'#000',
        fontFamily:'Poppins-SemiBold',
        marginTop:10,
    },
    label:{
        marginBottom:10,
        fontSize:18,
        textAlign:'center',
        color:'#000',
        transform:[{translateY:-5}]
    }
})
export default TimeDisplay;