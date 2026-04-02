import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function App() {

  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {

    const a = parseFloat(alcool);
    const g = parseFloat(gasolina);

    if (!a || !g) {
      setResultado("Preencha os valores");
      return;
    }

    const res = a / g;

    if (res < 0.7) {
      setResultado("Compensa usar Álcool");
    } else {
      setResultado("Compensa usar Gasolina");
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "https://e7.pngegg.com/pngimages/465/214/png-clipart-gasoline-computer-icons-pump-fuel-natural-gas-others-television-orange.png" }}
        style={styles.img}
      />

      <Text style={styles.title}>Qual a melhor opção?</Text>

      <Text style={styles.label}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      <Text style={styles.label}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>CALCULAR</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20233a",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  input: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#f5c542",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    fontWeight: "bold",
  },

  resultado: {
    color: "#fff",
    marginTop: 20,
    fontSize: 18,
  },
});