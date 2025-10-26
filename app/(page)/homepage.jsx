import {router, useRouter} from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { homepage } from "../../assets/styles/style";

export default function Index() {

    const homepageStyles = homepage();
    const router = useRouter();

    return (
        <View style = {homepageStyles.container}>

            <View style={homepageStyles.searchBar}>

                <TextInput style={homepageStyles.searchInput}
                           autoCapitalize="none"
                           placeholder="Search.."
                           placeholderTextColor="black"
                />

                <TouchableOpacity onPress={() => router.push("/(page)/cart")}>
                    <Image source={require('../../assets/images/cart.png')}
                           style={homepageStyles.cart}
                    />
                </TouchableOpacity>

            </View>

            <ScrollView contentContainerStyle={{paddingBottom:100}} style = {homepageStyles.scrollContainer}>
                <View style = {homepageStyles.header}>
                    <View style={homepageStyles.headerTextContainer}>
                        <Text style={homepageStyles.headText}>Accessible Online Orders</Text>
                        <Text style={homepageStyles.subheadText}>Empowering of all trades from Farmers to Artisans</Text>
                    </View>

                    <View style={homepageStyles.categoryContainer}>
                        <View style={homepageStyles.topCategories}/>
                        <View style={homepageStyles.topCategories}/>
                        <View style={homepageStyles.topCategories}/>
                    </View>

                </View>

                <View style={homepageStyles.line}/>

                <Text style={homepageStyles.head}>My Purchases</Text>

                <View style={homepageStyles.purchaseCont}>

                    <View style={homepageStyles.purchase}>

                        <TouchableOpacity onPress={() => router.push('/options')}>
                            <Image source={require('../../assets/images/wallet.png')}
                                   style = {{width: 50, height: 50, marginLeft:23, marginTop:10}}/>
                            <Text style={{marginTop:15, marginLeft:23, fontWeight:'600'}}>To Pay</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/options')}>
                            <Image source={require('../../assets/images/ship.png')}
                                   style = {{width: 55, height: 55, marginLeft:23, marginTop:10}}/>
                            <Text style={{marginTop:11, marginLeft:23, fontWeight:'600'}}>To Ship</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/options')}>
                            <Image source={require('../../assets/images/received.png')}
                                   style = {{width: 65, height: 65, marginLeft:23, marginTop:10}}/>
                            <Text style={{marginTop:1, marginLeft:23, fontWeight:'600'}}>To Receive</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("/(page)/rate")}>
                            <Image source={require('../../assets/images/rate.png')}
                                   style = {{width: 53, height: 53, marginLeft:23, marginTop:10}}/>
                            <Text style={{marginTop:13, marginLeft:23, fontWeight:'600'}}>To Rate</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <Text style={homepageStyles.head}>For You</Text>

                <View style={homepageStyles.forYou}>

                    <TouchableOpacity style={homepageStyles.card} onPress={() => router.push("/(page)/product")}>
                        <Image source={require('../../assets/images/coco.jpg')} style={homepageStyles.imgCard}/>
                        <Text style={homepageStyles.text}>Apple</Text>
                        <Text style={homepageStyles.price}>₱16.78</Text>

                        <View style={homepageStyles.cardInfo}>
                            <View style={homepageStyles.rate}>
                                <Text style={homepageStyles.ratingNum}>★ 4.9</Text>
                            </View>
                            <Text style={homepageStyles.soldNum}>1k+ sold</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            <View style={homepageStyles.footerContainer}>

                <View style={homepageStyles.footer}>

                    <View>
                        <Image source={require('../../assets/images/home.png')}
                               style = {{height:35, width:35, marginLeft:6}}/>
                        <Text style={{marginTop:3, marginLeft:3, fontWeight:'500', color:"white"}}>Home</Text>
                    </View>

                    <View>

                        <TouchableOpacity onPress={() => router.push("/(page)/categories")}>
                            <Image source={require('../../assets/images/category.png')}
                                   style = {{height:40, width:40, marginLeft:16}}/>
                            <Text style={{marginTop:0, marginLeft:3, fontWeight:'500', color:"white"}}>Category</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity>
                        <Image source={require('../../assets/images/profile.png')}
                               style = {{height:37, width:37, marginLeft:8}}/>
                        <Text style={{marginTop:3, marginLeft:3, fontWeight:'500', color:"white"}}>Profile</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}