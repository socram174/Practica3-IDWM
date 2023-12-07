import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { Portal, Avatar, Button, Card } from "react-native-paper";
import { EditModal } from "../components/EditModal";
import { baseUrl } from "../config";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(null);
  const [selectedSkillOrHobby, setSelectedSkillOrHobby] = useState(null);

  const showModal = () => setVisible(true);

  const getProfile = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    setProfile(data);
  };

  useEffect(() => {
    getProfile().then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Mi portafolio</Text>
          <Button onPress={getProfile} mode="contained">Actualizar</Button>
          <Card style={styles.card}>
            <Card.Title
              title="Información personal"
              subtitle={profile.year}
              left={LeftContent}
              titleStyle={{ fontSize: 20, fontWeight: "bold" }}
            />
            <Card.Content>
              <Text variant="titleLarge"><Text style={{fontWeight: "bold"}}>Nombre:</Text> {profile.name}</Text>
              <Text variant="bodyMedium"><Text style={{fontWeight: "bold"}}>Email:</Text> {profile.email}</Text>
              <Text variant="bodyMedium"><Text style={{fontWeight: "bold"}}>Ciudad:</Text> {profile.city}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://www.webfx.com/wp-content/uploads/2023/08/52_service_page_web_design-1000x451.png" }} />
            <Text variant="titleLarge" style={{padding: 10, textAlign:"center"}}>DESCRIPCIÓN</Text>
            <Text variant="bodyMedium" style={{padding: 10, backgroundColor: "white"}}>{profile.description}</Text>
            <Card.Actions>
              <Button onPress={() => {
                setType("personal");
                showModal();
              }}>Editar</Button>
            </Card.Actions>
          </Card>


          <Card style={styles.card}>
            <Card.Title
              title="Tecnologias"
              subtitle={profile.year}
              left={(props) => <Avatar.Icon {...props} icon="library" />}
              titleStyle={{ fontSize: 20, fontWeight: "bold" }}
            />
            {profile.skills.map((skill, index) => {
                return (
                    <View style={{gap: 20}}>
            <Card.Content>
              <Text variant="titleLarge" style={{textAlign:"center", fontSize: 20}}> {skill.title}</Text>
              
            </Card.Content>
            <Card.Cover source={{ uri: skill.path }} />
            <Text variant="bodyMedium" style={{padding: 10, backgroundColor: "white"}}>{skill.description}</Text>
            <Card.Actions>
              <Button onPress={() => {
                setType("skills");
                setSelectedSkillOrHobby(index);
                showModal();
              }}>Editar</Button>
            </Card.Actions>
                    </View>
                )
            })}

          </Card>


          <Card style={styles.card}>
            <Card.Title
              title="Hobbies"
              subtitle={profile.year}
              left={(props) => <Avatar.Icon {...props} icon="library" />}
              titleStyle={{ fontSize: 20, fontWeight: "bold" }}
            />
            {profile.hobbies.map((hobbie, index) => {
                return (
                    <View style={{gap: 20}}>
            <Card.Content>
              <Text variant="titleLarge" style={{textAlign:"center", fontSize: 20}}> {hobbie.title}</Text>
              
            </Card.Content>
            <Text variant="bodyMedium" style={{padding: 10, backgroundColor: "white"}}>{hobbie.description}</Text>

            {hobbie.activities.map((activity) => {
                return (
                    <>
                    <Text>{activity.title}</Text>
                    <Card.Cover source={{ uri: activity.path }} />
                    </>

                )
            })}
            <Card.Actions>
              <Button onPress={() => {
                setType("hobbies");
                setSelectedSkillOrHobby(index);
                showModal();
              }}>Editar</Button>
            </Card.Actions>
                    </View>
                )
            })}

          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
    <Portal>
        <EditModal visible={visible} setVisible={setVisible} type={type} profile={profile} getProfile={getProfile} selectedIndex={selectedSkillOrHobby} />
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  card: {
    width: "95%",
    padding:  10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
