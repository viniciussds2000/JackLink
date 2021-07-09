import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles} from './style';

import { ButtonIcon } from "../../components/ButtonIcon";
import illustrationImg from '../../assets/illustration.png';

export function SignIn(){
    
    return(
        <View style={styles.container}>
            
            <Image source={illustrationImg} 
                style={styles.image}
                resizeMode="stretch" 
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com Discord"
                activeOpacity={0.7}/>
            </View>


        </View>
    );
}''