import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  
} from "react-native";

export default class AddNote extends React.Component {
render(){
  return (
      <View key={this.props.keyval} style={styles.note}>
          <Text style={styles.noteText} >{this.props.val.date}</Text>
          <Text >{this.props.val.note}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
              <Text style={styles.noteDeleteText}>Delete</Text>
          </TouchableOpacity>


      </View>
    
  );

}

}

const styles = StyleSheet.create({
  note:{
      position:'relative',
      paddingLeft:20,
      paddingRight:100,
      borderBottomWidth:2,
      borderBottomColor:'#ededed'
  },
  noteText:{
      paddingLeft:30,
      borderLeftWidth:20,

  },
  noteDelete:{
      justifyContent:'center',
      alignItems:'center',
      bottom:10,
      top:10,
      right:10,
      padding:10,
      position:"absolute",
      backgroundColor:"#2980b9"
  },
  noteDeleteText:{
      color:'white'
  }
});
 