import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.black, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ navigation }) => {

    const profileData = {
        name: 'John Doe',
        point: 200
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Ficus or Chinese Banyan",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Bangladesh",
        pageNo: 12,
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "$12",
        description: "Ficus or Chinese Banyan Tree/Bot. Age: 14 years. Care Level: very easy, 1. Pour water at least once every day on the bottom (root) and top of the plant. 2. Don’t keep Bonsai under direct sun light but in a place where it gets partly sun light and partly shadow. 3. If the pot is kept inside the room, keep it in the open place at least twice a week where it gets sun light. 4. Put fertilizer preferably cowdung after every 3 months. 5. Prune the shape of the plant by cutting away some of the longer branches. 6. Change soil of the pot once a year during rainy season!!",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "Kamane",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Nepal",
        pageNo: 16,
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "16k",
        description: "Kamane Age: 13 years.Care Level: easy, 1. Pour water at least once every day on the bottom (root) and top of the plant. 2. Don’t keep Bonsai under direct sun light but in a place where it gets partly sun light and partly shadow. 3. If the pot is kept inside the room, keep it in the open place at least twice a week where it gets sun light. 4. Put fertilizer preferably cowdung after every 3 months. 5. Prune the shape of the plant by cutting away some of the longer branches. 6. Change soil of the pot once a year during rainy season!!!",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "Juniper Bonsai",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Bangladesh",
        pageNo: 10,
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "$10",
        description: "Juniper Bonsai, Style: Cascade. Age: 7 years. Care Level: very easy, 1. Pour water at least once every day on the bottom (root) and top of the plant. 2. Don’t keep Bonsai under direct sun light but in a place where it gets partly sun light and partly shadow. 3. If the pot is kept inside the room, keep it in the open place at least twice a week where it gets sun light. 4. Put fertilizer preferably cowdung after every 3 months. 5. Prune the shape of the plant by cutting away some of the longer branches. 6. Change soil of the pot once a year during rainy season!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "$12",
            lastRead: "small",

        },
        {
            ...bookTheMetropolis,
            completion: "$16",
            lastRead: "small",

        },
        {
            ...bookTheTinyDragon,
            completion: "$10",
            lastRead: "small",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Popular",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>WelCome</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.lightGreen,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} point</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;