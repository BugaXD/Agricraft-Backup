import {inputStyles} from "../../assets/styles/inputStyles";
import {useRouter} from "expo-router";
import {shop} from "../../assets/styles/shop";
import { cartStyles } from "../../assets/styles/cartStyles";
import {orderTrackingStyle} from "../../assets/styles/orderTrackingStyles";
import {Image, ScrollView, TouchableOpacity, View, Text, StyleSheet, TextInput, Alert} from "react-native";
import StarRating from "../../components/StarRating";
import React, {useState} from "react";
import {FontAwesome} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';


export default function writeReview() {

    const styles = inputStyles();
    const router = useRouter();
    const shopStyle = shop();
    const cartStyle = cartStyles();
    const orderTrackingStyles = orderTrackingStyle();
    const [selectedImages, setSelectedImages] = useState([]);

    const handleRating = (rating) => {
        console.log(rating);
    }

    const pickMultipleImages = async () => {
        try {
            const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permission.granted) {
                Alert.alert("Permission required", "We need access to your gallery.");
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                allowsMultipleSelection: true,
                quality: 0.8,
                mediaType: ImagePicker.MediaTypeOptions.Images,
            });

            if (!result.canceled) {
                setSelectedImages(result.assets);
            }

        } catch (error) {
            if (error.code !== 'E_PICKER_CANCELLED') {
                console.log('Error picking images:', error);
                Alert.alert('Error', 'Failed to pick images');
            }
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={shopStyle.scrollContainer} contentContainerStyle={{paddingBottom: 100}}>
                <View style={{flexDirection: "column", gap: 12}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image source={require('../../assets/images/back.png')}
                                   style={{width: 29, height: 29, marginLeft: 20, marginTop: 1,}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}/>

                    <View style={orderTrackingStyles.orderCardContainer}>
                        <View style={orderTrackingStyles.orderCardInner}>

                            <View style={orderTrackingStyles.orderImgContainer}>
                                <Image source={require('../../assets/images/cat.jpg')} style={orderTrackingStyles.orderImg}/>
                            </View>

                            <View style={orderTrackingStyles.orderInfoContainer}>

                                <View style={orderTrackingStyles.orderCardInfo}>
                                    <Text style={orderTrackingStyles.orderCardInfoH1}>Order Number</Text>
                                    <Text>#1234567890</Text>
                                </View>

                                <View style={orderTrackingStyles.orderCardInfo}>
                                    <Text style={orderTrackingStyles.orderCardInfoH1}>Total</Text>
                                    <Text>₱000.00</Text>
                                </View>

                                <View style={orderTrackingStyles.orderCardInfo}>
                                    <Text style={orderTrackingStyles.orderCardInfoH1}>Estimated Delivery</Text>
                                    <Text>October 24, 2025</Text>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style={styles.line}/>

                    <View style={[writeReviewStyles.starsContainer, writeReviewStyles.alignment]}>
                        <View style={writeReviewStyles.starsInner}>
                            <StarRating maxStars={5} onRate={handleRating}/>
                        </View>
                    </View>

                    <View style={[writeReviewStyles.addPhotosContainer, writeReviewStyles.alignment]}>
                        <Text style={[styles.h2, writeReviewStyles.addPhotoText]}>Add Photos</Text>
                        <TouchableOpacity style={writeReviewStyles.addPhotosInner} onPress={pickMultipleImages}>
                            {selectedImages.length === 0 ? (
                                <>
                                    <Image
                                        source={require('../../assets/images/upload.png')}
                                        style={writeReviewStyles.addPhotosImg}
                                    />
                                    <Text>Click here to upload</Text>
                                </>
                            ) : (
                                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                                    {selectedImages.map((img, index) => (
                                        <Image
                                            key={index}
                                            source={{ uri: img.uri }}
                                            style={{ width: 85, height: 85, margin: 5, borderRadius: 10 }}
                                        />
                                    ))}
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={[writeReviewStyles.reviewContainer, writeReviewStyles.alignment]}>
                        <Text style={[styles.h2, writeReviewStyles.addPhotoText]}>Write your Review</Text>
                        <TextInput
                            multiline={true}
                            placeholder={"Write your Review here...."}
                            style={writeReviewStyles.reviewInner}
                        />
                    </View>

                    <TouchableOpacity style={writeReviewStyles.reviewButton}>
                        <Text style={writeReviewStyles.reviewButtonText}>Submit Review</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}
const writeReviewStyles = StyleSheet.create({
    starsContainer: {
        borderWidth: 1,
        width: "95%",
        height: 95,
        borderRadius: 20,
        backgroundColor: "#FAF7F0",
        borderColor: "rgba(0,0,0,0.2)",
        alignSelf: "center",
    },
    starsInner: {
        borderWidth: 1,
        width: "95%",
        marginTop: 20,
        alignSelf: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "white",
        borderColor: "rgba(0,0,0,0.2)",
    },
    addPhotosContainer: {
        borderWidth: 1,
        width: "95%",
        height: 150,
        borderRadius: 20,
        backgroundColor: "#FAF7F0",
        borderColor: "rgba(0,0,0,0.2)",
    },
    addPhotosInner: {
        borderWidth: 1,
        height: "70%",
        width: "95%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 5,
        backgroundColor: "white",
        borderColor: "rgba(0,0,0,0.2)",
    },
    addPhotosImg: {
        width: 40,
        height: 40,
        marginTop: 16,
    },
    addPhotoText: {
        marginLeft: 15,
        marginTop: 10,
    },
    reviewContainer: {
        borderWidth: 1,
        width: "95%",
        height: 270,
        borderRadius: 20,
        backgroundColor: "#FAF7F0",
        borderColor: "rgba(0,0,0,0.2)",
    },
    reviewInner: {
        borderWidth: 1,
        width: "95%",
        alignSelf: "center",
        height: "80%",
        borderRadius: 15,
        marginTop: 10,
        justifyContent: "flex-start",
        textAlignVertical: "top",
        backgroundColor: "white",
        borderColor: "rgba(0,0,0,0.2)",
    },
    reviewButton: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        width: "90%",
        height: "5%",
        borderRadius: 30,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#91CAFF",
    },
    alignment: {
        alignSelf: "center",
    },
    reviewButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    }

})