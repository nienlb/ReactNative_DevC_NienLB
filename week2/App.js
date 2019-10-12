import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements'

// const { width, height } = Dimensions.get('window')
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';


const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.arrow}>
        <Icon
          name='ios-arrow-back'
          type='ionicon'
          color={POLO_BLUE_COLOR}
          size={25}
          onPress={() => { alert('BACH') }}
        />
        <Icon
          name='ios-apps'
          type='ionicon'
          color={POLO_BLUE_COLOR}
          size={25}
          onPress={() => { alert('NIEN') }}
        />
      </View>
      <View style={styles.heading}>
        <View style={styles.avatar}>
          <Image
            style={styles.comAvatar}
            source={require('./assets/avatar.jpg')}
          />
        </View>
        <View style={styles.profiles}>
          <Text style={styles.comProfilesName}>
            Lương Bách Niên
          </Text>
          <Text style={styles.comProfilesJob}>
            NewBie Coder
          </Text>
          <View style={styles.comProfilesFollow}>
            <Button
              onPress={() => { alert('Follow') }}
              title={'Follow'}
              buttonStyle={styles.comButtonFollow}
            />
            <Button
              onPress={() => { alert('Direct') }}
              containerStyle={{ marginLeft: 10 }}
              buttonStyle={styles.comButtonMes}
              icon={<Icon
                name="send"
                size={25}
                color="white"
              />}
            />
          </View>
        </View>
      </View>
      <View style={styles.numberCount}>
        <View style={styles.comNumberCount}>
          <Text style={{ fontSize: 26, fontWeight: '500', margin: 8 }}> 1210 </Text>
          <Text style={{ color: '#b3d1ff', fontWeight: '700' }}> Photos</Text>
        </View>
        <View style={styles.comNumberCount}>
          <Text style={{ fontSize: 26, fontWeight: '500', margin: 8 }}> 10k </Text>
          <Text style={{ color: '#b3d1ff', fontWeight: '700' }}> Followers</Text>
        </View>
        <View style={styles.comNumberCount}>
          <Text style={{ fontSize: 26, fontWeight: '500', margin: 8 }}> 200 </Text>
          <Text style={{ color: '#b3d1ff', fontWeight: '700' }}> Following</Text>
        </View>
      </View>

      <View style={styles.imageArea}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <View style={styles.comImageArea}>
            {
              imgData.slice(0, centerImgData).map(item => {
                return <Image key={item.id} source={item.imgSource} style={styles.image} />
              })
            }
          </View>
          <View style={styles.comImageArea}>
            {
              imgData.slice(centerImgData).map(item => {
                return <Image key={item.id} source={item.imgSource} style={styles.image} />
              })
            }
          </View>
        </ScrollView>
      </View>
      <View style={styles.direction}>
        <Icon
          name='ios-arrow-dropleft'
          type='ionicon'
          color={POLO_BLUE_COLOR}
          size={30}
          onPress={() => { alert('XIN') }}
        />
        <Icon
          name='ios-add'
          type='ionicon'
          color={POLO_BLUE_COLOR}
          size={30}
          onPress={() => { alert('CHAO') }}
        />
        <Icon
          name='ios-person'
          type='ionicon'
          color={POLO_BLUE_COLOR}
          size={30}
          onPress={() => { alert('THAY') }}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  arrow: {
    flex: 0.05,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
  },
  heading: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiles: {
    flex: 0.6,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  comProfilesName: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 0,
  },
  comProfilesJob: {
    fontSize: 16,
    color: 'grey',
    marginTop: -15
  },
  comProfilesFollow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  comButtonFollow: {
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 18,
    width: 120,
    height: 38,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  comButtonMes: {
    backgroundColor: SEND_MESSAGE_COLOR, borderRadius: 18, width: 60, height: 38,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },


  numberCount: {
    flex: 0.15,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around'
  },
  comNumberCount: {
    flex: 0.3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comAvatar: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50

  },
  imageArea: {
    flex: 0.55,
    flexDirection: "row",
    padding: 10,
    justifyContent: 'space-around',
  },
  comImageArea: {
    flexDirection: 'column'
  },

  image: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    height: 160,
    width: 160,
    marginTop: 10,
    borderRadius: 20,
  },

  direction: {
    flex: 0.05,
    flexDirection: "row",
    justifyContent: 'space-evenly'
  }


});
