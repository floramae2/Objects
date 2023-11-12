import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const students = [
  {
  id: 1,
  firstName: "RIZA",
  lastName: "BATULANON",
  nickname: "Sang",
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year",
},
{
  id: 2,
  firstName: "MIARAFE",
  lastName: "BETASA",
  nickname: "Mia",
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year",
  },
  { 
    id: 3, 
    firstName: "JENMARIE", 
    lastName: "CUMAHIG",
    nickname: "Jen",
    course: "BS INFORMATION TECHNOLOGY",
    year: "3rd Year",
}, 
{ 
    id: 4, 
    firstName: "ROGEL",
    lastName: "GARCIA", 
    nickname: "Tote",
    course: "BS INFORMATION TECHNOLOGY",
    year: "3rd Year",
    
}, 
{ 
    id: 5, 
    firstName: "MARIE THERESE",
    lastName: "JAUM", 
    nickname: "Atit", 
    course: "BS INFORMATION TECHNOLOGY",
    year: "3rd Year",
}, 
{ 
    id: 6, 
    firstName: "PEARL ANGELIE", 
    lastName:" LANSANG",
    nickname: "Pearly", 
    course: "BS INFORMATION TECHNOLOGY",
    year: "3rd Year",
}, 
{ 
  id: 7, 
  firstName: "MONALIZA",
  lastName:"LIPARTO",
  nickname: "Mona", 
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year",
}, 
{ 
  id: 8, 
  firstName: "DESERRIE", 
  lastName: "LUMANTAS", 
  nickname: "Des",
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year",
}, 
{ 
  id: 9, 
  firstName: "JHANNEL", 
  lastName:"QUISQUIRIN",
  nickname: "Jhannel",
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year", 
}, 
{ 
  id: 10, 
  firstName: "FLORA MAE", 
  lastName:"REQUILLO",
  nickname: "Jekjek", 
  course: "BS SECRET",
  year: "4th Year",
}, 
{ 
  id: 11, 
  firstName: "LORAINE MAEJAY", 
  lastName:"TAMAYO",
  nickname: "Jayjay",
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year", 
}, 
{ 
  id: 12, 
  firstName: "JAQUELINE",
  lastName: "VILLOREJO",
  nickname: "Jaque", 
  course: "BS INFORMATION TECHNOLOGY",
  year: "3rd Year",
},

  
];



const App = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedInfo(item)}>
      <View style={styles.nicknameButton}>
        <Text>{item.nickname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>Nicknames</Text>
      <FlatList
        data={students} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20,  color: 'blue' }}>
        Selected Info
      </Text>
      <ScrollView>
        {selectedInfo && (
          <View style={{ padding: 8, }}>
            <Text><Text style={{ fontWeight: 'bold' }}>ID:</Text> {selectedInfo.id}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>FirstName:</Text> {selectedInfo.firstName}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>LastName:</Text> {selectedInfo.lastName}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Nickname:</Text> {selectedInfo.nickname}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Course:</Text> {selectedInfo.course}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Year:</Text> {selectedInfo.year}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = {
  nicknameButton: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
};

export default App;
