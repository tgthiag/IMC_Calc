import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form(){
    const [altura, setAltura] = useState(null)
    const [Peso, setPeso]= useState(null)
    const [messageIMC, setMessageIMC]= useState("Preencha o peso e a altura.")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")

    function calcularImc(){
        return(setImc((Peso / (altura * altura)).toFixed(2)))
    }

    function validarImc(){
        if(altura != null && Peso != null){
            calcularImc()
            setAltura(null)
            setPeso(null)
            setTextButton("Calcular novamente")
            setMessageIMC("Seu IMC é: ")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e a altura.")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                onChangeText={setPeso}
                value={Peso}
                placeholder='Ex 65.800'
                keyboardType='numeric'
                ></TextInput>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                onChangeText={setAltura}
                value={altura}
                placeholder='Ex 1.75'
                keyboardType='numeric'
                ></TextInput>
                
                <TouchableOpacity 
                style={styles.buttonCalc}
                onPress={()=> {
                    validarImc()}}>
                    <Text style={styles.textButtonCalc}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
}