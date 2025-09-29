import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Button
} from "react-native";

import { Link, useNavigation, useRouter } from 'expo-router';
import { useState } from "react";
  
  const logoApp = require('@/assets/images/logoagendei.png');
  
  // Já indica que esta função é exportada, não precisa ser exportada de novo no fim, export default exporta somente o default sem ()
export default function Login() {

  const navigation = useNavigation();
  const router = useRouter();

  const [name, setName] = useState<string | null>("");
  const [login, setLogin] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [confirmpassword, setConfirmPassword] = useState<string | null>("");
  const [viewPassword, setViewPassword] = useState<boolean>(true)


  function OnPress() {
    console.log("clicou para fazer registro")
    console.log(name)
    console.log(login)
    console.log(password)
    console.log(confirmpassword)

    // Validação de login e email
    if( ! login ){
      Alert.alert("Email inválido!")
      return
    }

    if( ! name ){
      Alert.alert("Nome inválido!")
      return
    }

    if( ! password ){
      Alert.alert("Senha inválida!")
      return
    }

    if( ! confirmpassword ){
      Alert.alert("Confirmação de senha inválida!")
      return
    }else if(password != confirmpassword){
      Alert.alert("A confirmação de senha não coincide com a senha!")
      return
    }
    router.navigate('/(tabs)')
  }
    return (
      <View style={styles.container}>
  
        <View style={styles.header}>
          <Image
            source={logoApp}
            style={styles.logo}
          />
        </View>
  
        <View style={styles.main}>
            <View style={styles.inputBox}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput placeholder="Defina seu nome..." 
            placeholderTextColor={'rgba(160, 160, 160, 1)'} 
            style={styles.input} 
            value = {name || ""}
            onChangeText={( value ) => {setName(value)}}/>
            </View>

            <View style={styles.inputBox}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput placeholder="Defina seu e-mail..." 
            placeholderTextColor={'rgba(160, 160, 160, 1)'} 
            style={styles.input} 
            value = {login || ""}
            onChangeText={( value ) => {setLogin(value)}}/>
            </View>

            <View style={styles.inputBox}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput placeholder="Defina sua senha..." 
            placeholderTextColor={'rgba(160, 160, 160, 1)'} 
            style={styles.input}
            value = {password || ""}
            onChangeText={( value ) => {setPassword(value)}}
            secureTextEntry={viewPassword}
            maxLength={30}

            />
            </View>

            <TouchableOpacity style={[styles.button]} onPress={ () => {setViewPassword( ! viewPassword)}}>
                <Text style={styles.textButton}>Ver</Text>
              </TouchableOpacity> 

            <View style={styles.inputBox}>
            <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput placeholder="Confirme sua senha..." 
            placeholderTextColor={'rgba(160, 160, 160, 1)'} 
            style={styles.input} 
            value = {confirmpassword || ""}
            onChangeText={( value ) => {setConfirmPassword(value)}}
            secureTextEntry={viewPassword}
            maxLength={30}
            />
            </View>
            
            {(name || login || password || confirmpassword) && (
                <TouchableOpacity style={[styles.button]} onPress={OnPress}>
                <Text style={styles.textButton}>Criar conta</Text>
              </TouchableOpacity>   
            )}
            { !name && !login && !password && !confirmpassword && (
              <TouchableOpacity style={[styles.disableButton]} onPress={OnPress}>
              <Text style={styles.textButton}>Criar conta</Text>
            </TouchableOpacity>   
            )} 
          </View>
  
        <View style={styles.footer}>
          <Text style={styles.text}>
            Já tenho conta.
  
            <Link href='/login' style={styles.link}>
              <Text> Fazer login.</Text>
            </Link>
          </Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    header: {
      flex: 3 / 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      marginTop: 45,
      // backgroundColor:'red',
    },
  
    main: {
      flex: 5 / 10,
      width: '100%',
      alignItems: 'center',
      padding: 20,
      paddingTop: 0,
      gap: 13,
    },
  
    footer: {
      flex: 2 / 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  
    logo: {
      width: 200,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      width: '80%',
      height: 50,
      borderRadius: 4,
      paddingLeft: 15,
      fontSize: 16,
      // margin: 8,
      backgroundColor: 'rgba(241, 245, 244, 1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      color: 'rgba(160, 160, 160, 1)',
      fontSize: 16,
    },
  
    textButton: {
      color: 'white',
      fontSize: 16,
      fontWeight: 600,
    },
  
    label: {
      fontSize: 16,
      width: '80%',
      fontWeight: 700,
    },
  
    link: {
      color: 'rgba(13, 110, 253, 1)',
    },
  
    inputBox: {
      width: '100%',
      alignItems: 'center',
    },
  
    button: {
      backgroundColor: 'rgba(13, 110, 253, 1)',
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
  
    disableButton: {
      backgroundColor: 'rgb(117, 117, 117)',
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    }
  });
  
  // Precisa ser exportada depois
  // function nomef_b (){}
  
  // só export exporta todos os elemento, com()
  // export function nomef_c() {}
  
  // Exporta anonimamente, função anonima, se quiser pode exportar na propria função ou ao final do doc
  // const Login = () => {}