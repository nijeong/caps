import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";


const SettingPage = ({ route, navigation }) => {
  const { user, userName: initialName, userGender: initialGender, userPreference: initialPreference } = route.params;
  const [name, setName] = useState(initialName);
  const [gender, setGender] = useState(initialGender);
  const [preference, setPreference] = useState(initialPreference);
  const [uid, setUid] = useState('');

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const handlePreferenceSelection = (selectedPreference) => {
    setPreference(selectedPreference);
  };

  const handleSave = async () => {
    console.log('저장 버튼이 클릭되었습니다.');
    // console.log('수정된 이름:', name);
    // console.log('수정된 성별:', gender);
    // console.log('수정된 체질:', preference);
    
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      gender: gender,
      preference: preference
    })
 
    // 수정된 정보를 저장한 후에 다시 SecondPage로 이동합니다.
    navigation.goBack('SecondPage', { userName: name, userGender: gender, userPreference: preference });
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("user", user.uid);
            setUid(user.uid);
            getUserdetails(user.uid);
        } else {
            
        }
    });
};

  const getUserdetails = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("gender:", docSnap.data().gender);
      console.log("preference:", docSnap.data().preference);

      if(docSnap.data().gender == "male") {
        setGender('male');
      } else {
        setGender('female');
      }

      if(docSnap.data().preference == "추위를 잘타요") {
        setPreference('추위를 잘타요');
      } else if(docSnap.data().preference == "보통") {
        setPreference('보통');
      } else {
        setPreference('더위를 잘타요');
      }
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  
  useEffect(() => {
    authListener();
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 정보</Text>
      <View style={styles.divider} />

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>이름:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      
      </View>
      <View style={styles.divider} />
    

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>성별:</Text>
        <View style={styles.genderButtonsContainer}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.maleButton]}
            onPress={() => handleGenderSelection('male')}
          >
            <Text style={styles.genderButtonText}>남</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.femaleButton]}
            onPress={() => handleGenderSelection('female')}
          >
            <Text style={styles.genderButtonText}>여</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>체질:</Text>
        <View style={styles.preferenceButtonsContainer}>
          <TouchableOpacity
            style={[styles.preferenceButton, preference === '추위를 잘타요' && styles.selectedPreferenceButton]}
            onPress={() => handlePreferenceSelection('추위를 잘타요')}
          >
            <Text style={styles.preferenceButtonText}>추위를 잘타요</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.preferenceButton, preference === '보통' && styles.selectedPreferenceButton]}
            onPress={() => handlePreferenceSelection('보통')}
          >
            <Text style={styles.preferenceButtonText}>보통</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.preferenceButton, preference === '더위를 잘타요' && styles.selectedPreferenceButton]}
            onPress={() => handlePreferenceSelection('더위를 잘타요')}
          >
            <Text style={styles.preferenceButtonText}>더위를 잘타요</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
  <Text style={styles.buttonText}>저장</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    
    paddingHorizontal: 20,
    paddingTop: 50, // 맨 위에서부터 채우기 위한 패딩 추가
  },
  title: {
    fontSize: 30,
    
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '120%',
    
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  genderButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  genderButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  maleButton: {
    backgroundColor: 'lightblue',
  },
  femaleButton: {
    backgroundColor: 'pink',
  },
  genderButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  preferenceButtonsContainer: {
    flexDirection: 'row',
  },
  preferenceButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedPreferenceButton: {
    backgroundColor: 'lightgreen',
  },
  preferenceButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center', // 좌측 정렬
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SettingPage;