import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { Modal, Button, Card, TextInput } from "react-native-paper";

export const EditModal = ({
  visible,
  setVisible,
  type,
  profile,
  getProfile,
  selectedIndex
}) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [city, setCity] = useState(profile.city);
  const [year, setYear] = useState(profile.year);
  const [description, setDescription] = useState(profile.description);

  const [title, setTitle] = useState(profile.skills[selectedIndex]?.title || "");
  const [skillDescription, setSkillDescription] = useState(profile.skills[selectedIndex]?.description || "");
  const [path, setPath] = useState(profile.skills[selectedIndex]?.path || "");

  const hideModal = () => {
    setVisible(false);
  };

    // Use useEffect to update state when the profile prop changes
    useEffect(() => {
      setName(profile.name);
      setEmail(profile.email);
      setCity(profile.city);
      setYear(profile.year);
      setDescription(profile.description);
      setTitle(profile.skills[selectedIndex]?.title || "");
      setSkillDescription(profile.skills[selectedIndex]?.description || "");
      setPath(profile.skills[selectedIndex]?.path || "");
    }, [profile, selectedIndex]);

  const editProfile = async () => {
    console.log(name, email, city, year, description);

    const response = await fetch(`http://192.168.0.2:3000/api/profile/${profile._id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "personal",
        name,
        email,
        city,
        year,
        description,
      }),
    }); 
    

    const data = await response.json();

    console.log(data);

    getProfile();
    setVisible(false);
  };

  const editSkill = async () => {
    console.log(title, skillDescription, path);

    const response = await fetch(`http://192.168.0.2:3000/api/profile/${profile._id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "skill",
        title,
        description: skillDescription,
        path,
        skillIndex: selectedIndex

      }),
    }); 
    

    const data = await response.json();

    console.log(data);

    getProfile();
    setVisible(false);
  };

  const editHobbie = async () => {
    console.log(title, skillDescription, path);

    const response = await fetch(`http://192.168.0.2:3000/api/profile/${profile._id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "skill",
        title,
        description: skillDescription,
        path,
        skillIndex: selectedIndex

      }),
    }); 
    

    const data = await response.json();

    console.log(data);

    getProfile();
    setVisible(false);
  };


  const containerStyle = {
    backgroundColor: "white",
    padding: 50,
    width: "90%",
    height: "auto",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    alignSelf: "center",
    gap: 20,
    top: 20
  };

  if (type === "personal") {
    return (
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
      >
       <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
      <View style={containerStyle}>
         <Text
          style={{ textAlign: "center", marginBottom: 20, fontWeight: "bold" }}
        >
          EDICIÓN DEL PERFIL
        </Text>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label="Ciudad"
          value={city}
          onChangeText={(city) => setCity(city)}
        />
        <TextInput
          label="Año"
          value={year}
          onChangeText={(year) => setYear(year)}
        />
                <TextInput
          label="Descripción"
          value={description}
          onChangeText={(description) => setDescription(description)}
        />


        <Button onPress={editProfile} mode="contained">Confirmar</Button>
        <Button onPress={hideModal}>Cancelar</Button>
      </View>
      </ScrollView>
       </KeyboardAvoidingView>
      </Modal>
    );
  }

  if (type === "skills") {
    return (
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
      >
       <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
      <View style={containerStyle}>
         <Text
          style={{ textAlign: "center", marginBottom: 20, fontWeight: "bold" }}
        >
          EDICIÓN DE LAS TECNOLOGIAS
        </Text>
        <TextInput
          label="Titulo"
          value={title}
          onChangeText={(title) => setTitle(title)}
        />
        <TextInput
          label="Descripción"
          value={skillDescription}
          onChangeText={(description) => setSkillDescription(description)}
        />
        <TextInput
          label="url"
          value={path}
          onChangeText={(path) => setPath(path)}
        />

        <Button onPress={editSkill} mode="contained">Confirmar</Button>
        <Button onPress={hideModal}>Cancelar</Button>
      </View>
      </ScrollView>
       </KeyboardAvoidingView>
      </Modal>
    );
  }

  if (type === "hobbies") {
    return (
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
      >
       <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
      <View style={containerStyle}>
         <Text
          style={{ textAlign: "center", marginBottom: 20, fontWeight: "bold" }}
        >
          EDICIÓN DE LOS HOBBIES
        </Text>
        <TextInput
          label="Titulo"
          value={profile.hobbies[selectedIndex]?.title}
          onChangeText={(title) => setTitle(title)}
        />
        <TextInput
          label="Descripción"
          value={profile.hobbies[selectedIndex]?.description}
          onChangeText={(description) => setSkillDescription(description)}
        />

        <Button onPress={editHobbie} mode="contained">Confirmar</Button>
        <Button onPress={hideModal}>Cancelar</Button>
      </View>
      </ScrollView>
       </KeyboardAvoidingView>
      </Modal>
    );
  }
};
