import React, { Children } from "react";
import { Image } from "react-native";

import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props) {
    const { secondary80, secondary70 } = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary70]}
        >
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}

            />
        </LinearGradient>
    )
}