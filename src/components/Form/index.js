import React, {useState} from 'react';
import { View, Text, TextInput, Button } from "react-native";
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
            <View>
                <Text>Peso</Text>
                <TextInput
                onChangeText={setPeso}
                value={Peso}
                placeholder='Ex 65.800'
                keyboardType='numeric'
                ></TextInput>

                <Text>Altura</Text>
                <TextInput
                onChangeText={setAltura}
                value={altura}
                placeholder='Ex 1.75'
                keyboardType='numeric'
                ></TextInput>

                <Button 
                onPress={() => validarImc()}
                title={textButton}/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
}