import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text
  } from "react-native";
  
  import { Link } from 'expo-router';
  
  const logoApp = require('@/assets/images/logoagendei.png');
  
  // Já indica que esta função é exportada, não precisa ser exportada de novo no fim, export default exporta somente o default sem ()
  export default function Login() {
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
            <Text style={styles.label}>E-mail:</Text>
            <TextInput placeholder="Informe o e-mail de acesso..." placeholderTextColor={'rgba(160, 160, 160, 1)'} style={styles.input} />
          </View>
  
          <View style={styles.inputBox}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput placeholder="Informe a senha de acesso..." placeholderTextColor={'rgba(160, 160, 160, 1)'} style={styles.input} />
          </View>
  
          <TouchableOpacity style={[styles.button]}>
            <Link href={"/(tabs)"}>
              <Text style={styles.textButton}>Acessar</Text>
            </Link>
          </TouchableOpacity>
        </View>
  
        <View style={styles.footer}>
          <Text style={styles.text}>
            Não tenho conta.
  
            <Link href='/register' style={styles.link}>
              <Text> Criar conta agora.</Text>
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
    }
  
  });
  
  // Precisa ser exportada depois
  // function nomef_b (){}
  
  // só export exporta todos os elemento, com()
  // export function nomef_c() {}
  
  // Exporta anonimamente, função anonima, se quiser pode exportar na propria função ou ao final do doc
  // const Login = () => {}