//นำเข้า  วิว    ข้อความ  จาก   ชื่อไลบรารี่
import {View, Text, StyleSheet, Image } from 'react-native';

//ส่งออก  เริ่มต้น  ตรงตัว   ชื่องfun
export default function App(){
  return(
    <View style={homeStyle.container}>
      <Text style={homeStyle.title}>Naphat</Text>

      <Image source={require('@/assets/pai.jpeg')} 
      style={{
        width: 200,
        height: 200,
        borderRadius: 100, // โค้ง
        borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
      }}
      />

      <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye8gqLZ0w0srbYH77FwaE5N4-3MwJFmFCP4FV6p0sukEhfalWm6ipUE4&s=10"}}
        style={{
        width: 200,
        height: 200,
        borderRadius: 100, // โค้ง
        borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
      }}
      />
      <View style={{flexDirection: "row"}} >
        <Text>🤩 ว้าว</Text>
        <Text>😎 เฟี้ยว</Text>
      </View>

    </View>
  )
}
 //ตกแต่ง
  const homeStyle = StyleSheet.create({
   container:{
    backgroundColor: "red",
    flex:1, // ขยายที่
    alignItems: "center"
   },
   title:{
    color: "white", //สีอักสอน
    fontSize: 30, //ขนาด 
    fontWeight: 700, // ความหนา 100-900 
    fontStyle: "italic", // เอียง 
    textAlign: "center"
   }
 })