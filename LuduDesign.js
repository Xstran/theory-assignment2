import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
function Ludo() {
    return (
        <View style={styles.fixboard}>
            <View style={styles.columnarrange}>
                <View style={styles.green}>

                </View>
                <View style={styles.rowarrange}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.rowarrange}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.smallgreen}></View>
                </View>

                <View style={styles.rowarrange}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallred}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.RedBox}>
                </View>
            </View>

            <View style={styles.coulmnarrange2}>
                <View style={styles.columnd}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallgreen}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                   

                    <View style={styles.rowarrange}>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.smallred}></View>
                        <View style={styles.WhiteBox}></View>
                    </View>

                    <View style={styles.rowarrange}>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.smallred}></View>
                        <View style={styles.WhiteBox}></View>
                    </View>
                    <View style={styles.rowarrange}>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.smallred}></View>
                        <View style={styles.WhiteBox}></View>
                    </View>
                    <View style={styles.rowarrange}>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.smallred}></View>
                        <View style={styles.smallblue}></View>
                    </View>
                    <View style={styles.rowarrange}>
                        <View style={styles.smallred}></View>
                        <View style={styles.smallred}></View>
                        <View style={styles.WhiteBox}></View>
                    </View>
                    <View style={styles.rowarrange}>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.WhiteBox}></View>
                        <View style={styles.WhiteBox}></View>
                    </View>

                </View>
            </View>
            <View style={styles.coulmnarrange2}>
                <View style={styles.columnd}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.smallyellow}></View>

                </View>
            </View>
            <View style={styles.coulmnarrange2}>
                <View style={styles.columnd}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
            </View>

            <View style={styles.columnarrange}>
                <View style={styles.yellow}>

                </View>

                <View style={styles.rowarrange}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallyellow}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.rowarrange}>
                    <View style={styles.smallblue}></View>
                    <View style={styles.smallblue}></View>
                    <View style={styles.smallblue}></View>
                    <View style={styles.smallblue}></View>
                    <View style={styles.smallblue}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.rowarrange}>
                    < View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.smallblue}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.BlueBox}>

                </View>
            </View>
        </View>
    );
}

export default Ludo;

const styles = StyleSheet.create({
    MiddleBox: {
        borderColor: 'black', backgroundColor: 'Orange',
        height: 78, width: "100%",
        borderWidth: 1,
        marginLeft: -2,
        backgroundColor: 'white',

    },

    fixboard: {
        backgroundColor: 'white', borderColor: 'white',
        height: 500, width: 500,
        borderWidth: 20, borderRadius: 15,
        flexDirection: 'row',
        alignSelf:"center",
        marginTop:120
    
    },

    columnarrange: {
        height: 140, width: 140,
        flexDirection: 'column'
    },

    coulmnarrange2: {
        height: 23, width: 23,
        flexDirection: 'column'
    },

    rowarrange: {
        flexDirection: 'row'
    },

    columnd: {
        flexDirection: 'column',
    },

    green: {
        backgroundColor: 'green', borderColor: 'forestgreen',
        height: 140, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    yellow: {
        backgroundColor: 'goldenrod', borderColor: 'gold',
        height: 140, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    RedBox: {
        backgroundColor: 'firebrick', borderColor: 'red',
        height: 142, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    BlueBox: {
        backgroundColor: 'darkblue', borderColor: 'blue',
        height: 142, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },


    WhiteBox: {
        backgroundColor: 'white', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    smallred: {
        backgroundColor: 'red', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    smallgreen: {
        backgroundColor: 'forestgreen', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    smallyellow: {
        backgroundColor: 'yellow', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    smallblue: {
        backgroundColor: 'blue', 
        height: 23, width: 23,
        borderWidth: 1,
    },

});