import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { View,Text, FlatList, SafeAreaView } from "react-native";
import Card from "../components/Card";
type ItensProps = {
    dataApi:{
        name:{
            common: string;
        }
        capital?:string[];

        flags: {
            png: string;
        }
        languages:any;
        
        region:string;
    }
}

const ListItens = ({dataApi}: ItensProps) =>{
    return (
        <View>
            <Card image={dataApi.flags.png} name={dataApi.name.common}
                language={dataApi.languages[Object.keys(dataApi.languages)[0]]}
                region={dataApi.region} capital={dataApi.capital}  
            />
        </View>
    )
}
const Home = () => {
    const [country, setCounty] = useState();
    const getCounty = useCallback(async () => {
        try{
            const {data} = await axios.get('https://restcountries.com/v3.1/all')
            setCounty(data)
        }catch(error){

        }
    },[])
    useEffect(()=>{
        getCounty();
    },[])
    return (
        <SafeAreaView>
            <FlatList data={country} renderItem={({item}) => <ListItens dataApi={item}/>}></FlatList>
        </SafeAreaView>
        
    );
}

export default Home;