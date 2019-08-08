/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
import React, { useState, useCallback } from 'react';
import {
    View, Image, ScrollView, Text, Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const initialImgArray = {
    abogado: {
        id: 0,
        url: require('assets/abogado.jpg'),
        name: 'abogado',
    },
    abogada: {
        id: 0,
        url: require('assets/abogado.jpg'),
        name: 'abogada',
    },
    derecho: {
        id: 0,
        url: require('assets/abogado.jpg'),
        name: 'derecho',
    },
    abotonar: {
        id: 1,
        url: require('assets/abotonar.jpg'),
        name: 'abotonar',
    },
    'vestir la camisa': {
        id: 1,
        url: require('assets/abotonar.jpg'),
        name: 'vestir la camisa',
    },
    abril: {
        id: 2,
        url: require('assets/abril.jpg'),
        name: 'abril',
    },
    'abrir cajón': {
        id: 3,
        url: require('assets/abrir-cajon.jpg'),
        name: 'abrir cajón',
    },
    'abrir cajon': {
        id: 3,
        url: require('assets/abrir-cajon.jpg'),
        name: 'abrir cajón',
    },
    yo: {
        id: 4,
        url: require('assets/yo.jpg'),
        name: 'yo',
    },
    tener: {
        id: 4,
        url: require('assets/tengo.jpg'),
        name: 'tener',
    },
    tengo: {
        id: 4,
        url: require('assets/tengo.jpg'),
        name: 'tengo',
    },
    hambre: {
        id: 4,
        url: require('assets/hambre.jpg'),
        name: 'hambre',
    },
    dios: {
        id: 4,
        url: require('assets/dios.jpg'),
        name: 'Dios',
    },
    querer: {
        id: 4,
        url: require('assets/querer.jpg'),
        name: 'querer',
    },
    quiero: {
        id: 4,
        url: require('assets/querer.jpg'),
        name: 'quiero',
    },
    almuerzo: {
        id: 4,
        url: require('assets/almuerzo.jpg'),
        name: 'almuerzo',
    },
    almorzar: {
        id: 4,
        url: require('assets/almuerzo.jpg'),
        name: 'almorzar',
    },
    amor: {
        id: 4,
        url: require('assets/amor.jpg'),
        name: 'amor',
    },
    amo: {
        id: 4,
        url: require('assets/amor.jpg'),
        name: 'amo',
    },
};

const CreateSlide = ({ image, name }) => (
    <View key={`ìmg-${name}`} style={{ height: 60 }}>
        <View>
            <Image resizeMode="cover" source={image} />
        </View>
        <View style={{ textAlign: 'center', backgroundColor: '#e3e3e3' }}>
            <Text style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
            }}
            >
                {name}
            </Text>
        </View>
    </View>
);

const Main = () => {
    const [images, setImages] = useState([]);
    const [string, setString] = useState('');
    const onChangeTextEvent = useCallback((value) => {
        setString(value);
        if (value[value.length - 1] === ' ') {
            const tempArray = [];
            value.split(' ').map((item) => {
                const lowerItem = item.toLowerCase();
                if (initialImgArray[lowerItem]) {
                    tempArray.push({
                        url: initialImgArray[lowerItem].url,
                        name: lowerItem,
                    });
                }
                setImages(tempArray);
            });
        }
        if (value.trim() === '') {
            setImages([]);
        }
    }, []);
    return (
        <View style={{ width, height, backgroundColor: 'white' }}>
            <ScrollView horizontal style={{ backgroundColor: 'gray' }}>
                {
                    images.map(item => <CreateSlide key={`key-${item.url}`} image={item.url} name={item.name} />)
                }
            </ScrollView>
            <View style={{
                backgroundColor: 'white',
                flex: 1,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                overflow: 'hidden',
            }}
            >
                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <TextInput
                        label="Sentence"
                        mode="outlined"
                        value={string}
                        onChangeText={onChangeTextEvent}
                    />
                </View>
            </View>
        </View>
    );
};

export default Main;
