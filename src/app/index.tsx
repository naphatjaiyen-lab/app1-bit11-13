//นำเข้า  วิว    ข้อความ  จาก   ชื่อไลบรารี่
import {View, Text, StyleSheet, Image } from 'react-native';

//ส่งออก  เริ่มต้น  ตรงตัว   ชื่องfun
export default function App(){
  return(
    <View style={homeStyle.container}>
      

      <Image source={require('@/assets/ppai.jpg')} 
      style={{
        width: 200,
        height: 200,
        borderRadius: 100, // โค้ง
        borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
        borderColor: "skyblue",
      }}
      />
      <Text style={homeStyle.title}>Naphat Jaiyen</Text>

      <Text style={{padding:10}}>ง่วง หนาว หาว นอน</Text>

      <View style={{flexDirection: "row"}} >
        
      </View>

      <View style={{ flexDirection:"column",backgroundColor:"lightgray" ,width:"300",height:"100",gap:"10",borderRadius:10 ,padding:10}}>
        <Text>ห้อง BIT.1/1 เลขที่13</Text>
        <Text>Email: naphat.jaiyen@e-tech.ac.th</Text>
        <Text>Phone: 099-732-8579</Text>
      </View>

      <Text style={{right:130 ,marginTop:10}}>ภาพกิจกรรม</Text>

      
      <View style={{flexDirection:'row', gap:15 , padding:10}}>
        <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye8gqLZ0w0srbYH77FwaE5N4-3MwJFmFCP4FV6p0sukEhfalWm6ipUE4&s=10"}}
        style={{
        width: 100,
        height: 100,
        borderRadius: 10, // โค้ง
        //borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
      }}
      />
      <Image
         source={{uri:"https://img.online-station.net/image_content/2023/06/aot-attack-titan.jpg"}}
      style={{width:100,height:100,borderRadius:10}}
      />

      <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vn2yM7Q5Pg5YDl0vrnQB19LZvbEZ5HG2AJOxI-5sAw&s=10"}}
        style={{width:100,height:100,borderRadius:10}}
      />

      </View>


      
      
    </View>

  

    
  )

  



}
 //ตกแต่ง
  const homeStyle = StyleSheet.create({
   container:{
    backgroundColor: "white",
    flex:1, // ขยายที่
    alignItems: "center"
   },
   title:{
    color: "black", //สีอักสอน
    fontSize: 30, //ขนาด 
    fontWeight: 700, // ความหนา 100-900 
    fontStyle: "italic", // เอียง 
    textAlign: "center"
   }
 })