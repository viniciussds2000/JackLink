import React, {useState} from 'react';

import { View,Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Category } from '../../components/Category';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile/Index';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDividier';


import { styles  } from './style'; 
import { FlatList } from 'react-native-gesture-handler';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { color } from 'react-native-reanimated';

export function Home(){
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
        },
        Category: '1',
        date: '22/06 as 20:40h',
        description: "hojé é dia de rankeada"
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
        },
        Category: '1',
        date: '22/06 as 20:40h',
        description: "hojé é dia de rankeada"
        },
        
        
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory = {handleCategorySelect}
                    />
            
                    <View style={styles.content}>
                       
                        <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                            <Appointment data={item}/>
                            )}
                        ItemSeparatorComponent={() => <ListDivider/>}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                            
                        />

                        
                    
                    </View>
            </View>
        </View>
        
    );
}