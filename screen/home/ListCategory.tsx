import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ListCategory = () => {
  const slideImages = [
    {
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-digitalmat-gallery-3-202210?wid=728&hei=300&fmt=png-alpha&.v=1664392871324',
      caption: 'Slide 1',
    },
    {
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-1-202309?wid=728&hei=500&fmt=jpeg&qlt=90&.v=1692603382757',
      caption: 'Slide 2',
    },
    {
      url: 'https://www.apple.com/vn/iphone-15/images/overview/usb-c/usbc__bvuxditgibci_medium.png',
      caption: 'Slide 3',
    },
    {
      url:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_US?wid=728&hei=400&fmt=png-alpha&.v=1693346851451'
    }
  ];

  const renderSlide = (item:any, index:any) => (
    <View style={styles.slide} key={index}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        showsPagination={true}
        paginationStyle={styles.pagination}
      >
        {slideImages.map((item, index) => renderSlide(item, index))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    marginLeft: 10,
    backgroundColor: 'white',
    width:230,
    height:40,
    marginTop:10
  },
  searchInput: {
    
  },

  icon: {
    height:50,
    width:50,
    marginLeft:240
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  caption: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  pagination: {
    bottom: 5,
  },
});

export default ListCategory;
