import React, { Component } from "react";
import {
  SafeView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import Dimensions from "Dimensions";

const { width } = Dimensions.get("window");

const bannerPic = [
  "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d31aee36da2a28345ca6300b6bb5c92e/e61190ef76c6a7ef7d58560df3faaf51f3de669b.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553081817207&di=e6d6df8ff6cc34e8c57757bdb92c3d52&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b13632762d0f7032fd8c1c506fa513d2697c545.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553081817299&di=bd6de2091778bfebeb3fb1e9baf151f7&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8ad4b31c8701a18b4d601b5d902f07082838fe1d.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553081817298&di=dffc1508f9626bbae6e3947f33991e88&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F7af40ad162d9f2d3e0e370f6a7ec8a136327cc3d.jpg"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  banner: {
    marginTop: 38
  },
  image: {
    width: width,
    height: 180
  },
  indicator: {
    width: width,
    height: 40,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center"
  },
  unselected: {
    marginLeft: 10,
    fontSize: 40,
    color: "white"
  },
  selected: {
    marginLeft: 10,
    fontSize: 40,
    color: "#5CB85C"
  }
});

class Banner extends Component {
  static defaultProps = {
    duration: 1000
  };

  state = {
    position: 0
  };

  componentDidMount() {
    this.startTimer();
  }

  compoentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    let scrollView = this.refs.scrollView;
    this.timer = setInterval(() => {
      let cur = this.state.position;
      if (cur + 1 > bannerPic.length - 1) {
        cur = 0;
      } else {
        cur++;
      }
      this.setState({
        position: cur
      });
      scrollView.scrollTo({ x: cur * width, y: 0, animated: true });
    }, this.props.duration);
  }

  render() {
    return (
      <View style={styles.banner}>
        <ScrollView
          ref="scrollView"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={this.onAnimationEnd}
          onTouchStart={() => {
            clearInterval(this.timer);
          }}
          onTouchEnd={() => {
            this.startTimer();
          }}
        >
          {this.getImages()}
        </ScrollView>
        <View style={styles.indicator}>{this.getIndicator()}</View>
      </View>
    );
  }

  getImages() {
    let images = [];
    for (let i = 0; i < bannerPic.length; i++) {
      images.push(
        <View key={i}>
          <Image source={{ uri: bannerPic[i] }} style={styles.image} />
        </View>
      );
    }
    return images;
  }

  getIndicator() {
    let circles = [];
    for (let i = 0; i < bannerPic.length; i++) {
      circles.push(
        <Text
          key={i}
          style={
            i === this.state.position ? styles.selected : styles.unselected
          }
        >
          &bull;
        </Text>
      );
    }
    return circles;
  }

  onAnimationEnd = v => {
    let offsetX = v.nativeEvent.contentOffset.x;
    let position = Math.round(offsetX / width);
    this.setState({
      position: position
    });
  };
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Banner duration={2000} />
      </View>
    );
  }
}
