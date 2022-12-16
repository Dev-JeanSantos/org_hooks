import React, {useEffect, useState} from "react";
import { FlatList, Text } from "react-native";

import { carregaProdutores } from '../../../servicos/carregaDados';

export default function Produtores(){

    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])

    useEffect(()=>{
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);

    },[])


    return <FlatList
        data={lista}
        renderItem={({item: {nome}}) => <Text>{nome}</Text> }
        ListHeaderComponent={lista => <Text>{ titulo}</Text>}

    />
}