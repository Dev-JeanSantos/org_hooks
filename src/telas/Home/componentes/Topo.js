import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import { carregaTopo } from "../../../servicos/carregaDados";
import logo from "../../../assets/logo.png";

class Topo extends React.Component{

    state = {
        topo: {
            boasVindas: "",
            legenda: ""
        }
    }

    atualiazaTopo(){
        const retorno = carregaTopo()
        this.setState({ topo: retorno })
    }

    componentDidMount() {
       this.atualiazaTopo()
    }

    render(){
        return <View style={estilos.top}>
            <Image source={logo} style={estilos.image}/>
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }
  }


  const estilos = StyleSheet.create({
    top: {
        backgroundColor: "#f6f6f6",
        padding: 16
    }, 
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
  }) 


  export default Topo;