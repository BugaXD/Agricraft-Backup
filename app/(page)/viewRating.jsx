import { FontAwesome } from "@expo/vector-icons";
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { rating } from "../../assets/styles/rating";


export default function Categories() {
    const styles = rating();
    return (

        <View style={styles.container}>

            <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom:100}}>

                <View style = {{flexDirection: 'row',}}>

                    <TouchableOpacity onPress={() => router.back()}>
                        <Image source={require('../../assets/images/back.png')}
                               style = {styles.arrow}/>
                    </TouchableOpacity>

                    <Text style = {styles.headerText}>Ratings</Text>

                </View>

                <View style = {styles.ratingContainer}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Jameimei</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 60,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                        <View style = {{flexDirection: 'row',}}>
                            <Image source={require('../../assets/images/cassie.png')}
                                   style={styles.rateImg}/>
                            <Image source={require('../../assets/images/spag.jpg')}
                                   style={styles.rateImg}/>
                        </View>

                    </View>

                </View>

                <View style = {styles.ratingContainer1}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Cassie</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 110,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                    </View>

                </View>

                <View style = {styles.ratingContainer}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Jameimei</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 60,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                        <View style = {{flexDirection: 'row',}}>
                            <Image source={require('../../assets/images/cassie.png')}
                                   style={styles.rateImg}/>
                            <Image source={require('../../assets/images/spag.jpg')}
                                   style={styles.rateImg}/>
                        </View>

                    </View>

                </View>

                <View style = {styles.ratingContainer1}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Cassie</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 110,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                    </View>

                </View>

                <View style = {styles.ratingContainer}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Jameimei</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 60,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                        <View style = {{flexDirection: 'row',}}>
                            <Image source={require('../../assets/images/cassie.png')}
                                   style={styles.rateImg}/>
                            <Image source={require('../../assets/images/spag.jpg')}
                                   style={styles.rateImg}/>
                        </View>

                    </View>

                </View>

                <View style = {styles.ratingContainer1}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Cassie</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 110,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                    </View>

                </View>

                <View style = {styles.ratingContainer}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Jameimei</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 60,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                        <View style = {{flexDirection: 'row',}}>
                            <Image source={require('../../assets/images/cassie.png')}
                                   style={styles.rateImg}/>
                            <Image source={require('../../assets/images/spag.jpg')}
                                   style={styles.rateImg}/>
                        </View>

                    </View>

                </View>

                <View style = {styles.ratingContainer1}>

                    <View style = {{marginTop:15,}}>

                        <View style = {{flexDirection:'row',}}>
                            <Text style = {styles.rateName}>Totoy Cassie</Text>

                            <View style = {{alignItems: 'center', flexDirection: 'row', marginRight: 15, marginLeft: 110,}}>
                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                                <FontAwesome
                                    name={"star"}
                                    size={23}
                                    color= "#FFCD03"
                                    style={{ marginHorizontal: 2,}}
                                />

                            </View>

                        </View>

                        <Text style = {styles.rateDescription}>Maling item po binigay!!! Di pa masarap!! I need refund.</Text>

                    </View>

                </View>
            </ScrollView>
        </View>


    );
}