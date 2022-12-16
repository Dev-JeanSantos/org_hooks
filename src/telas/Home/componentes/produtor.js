import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.cartao}>
        <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem}/>
        <View  style={estilos.informacoes}>
            <Text  style={estilos.nome}>{nome}</Text>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#f6f6f6",
        marginVertical: 16,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4,
    }, 
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex:   1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
  }) 