import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
   <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}></Image>
           <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/7602068/pexels-photo-7602068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}></Image>
           <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}></Image>
          <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/1051072/pexels-photo-1051072.jpeg",
        }}></Image>
          <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/3889764/pexels-photo-3889764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         }}></Image>
          <Image style={{width:450,height:700}} source={{uri:"https://images.pexels.com/photos/3889986/pexels-photo-3889986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         }}></Image>
      </ScrollView>
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});