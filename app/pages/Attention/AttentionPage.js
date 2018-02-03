/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/21        Cheng Jifeng
 */

/* eslint-disable default-case */

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Avatar } from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import Attention from './Components/Attention';
import Video from './Components/Video';
import Hot from './Components/Hot';
import Community from './Components/Community';

const tabIndexFocused = 0;
const tabIndexVideo = 1;
const tabIndexHot = 2;
const tabIndexCommunity = 3;

class AttentionPage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '动态',
    title: '动态',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-heart' : 'ios-heart-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  state = {
    tabIndex: tabIndexFocused,
  };

  renderHeader = () => {
    return (
      <Header
        leftComponent={
          <Avatar
            small
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
            activeOpacity={0.7}
            avatarStyle={{
              borderWidth: 1,
              borderColor: Colors.white,
            }}
          />
        }
        centerComponent={{
          text: '动态',
          style: {
            color: Colors.white,
            fontSize: FontsSize.large,
          },
        }}
        rightComponent={
          <Ionicons
            name="ios-search"
            size={IconsSize.xlarge}
            color={Colors.white}
          />
        }
        backgroundColor={Colors.primary}
      />
    );
  }

  renderTabContent = () => {
    const _tab = this.state.tabIndex;

    switch (_tab) {
      case tabIndexFocused:
        return (
          <View>
            <Attention />
          </View>
        );
      case tabIndexVideo:
        return (
          <View>
            <Video matter={this.props.matter} />
          </View>
        );
      case tabIndexHot:
        return (
          <View>
            <Hot details={this.props.details} />
          </View>
        );
      case tabIndexCommunity:
        return (
          <View>
            <Community />
          </View>
        );
      break; // eslint-disable-line
    }
  };

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView style={styles.container}>
          <ScrollableTabView
            tabBarBackgroundColor={Colors.white}
            // scrollEnable
            // scrollWithoutAnimation
            tabBarUnderlineStyle={{
              backgroundColor: Colors.primary,
              width: Styles.Width(160),
            }}
            tabBarActiveTextColor={Colors.primary}
            tabBarInactiveTextColor={Colors.black}
            locked={false}
            renderTabBar={() => (
              // <ScrollableTabBar
              //   style={{ height: 35 }}
              //   tabStyle={{ height: 34, paddingLeft: 15, paddingRight: 15 }}
              // />
              <DefaultTabBar />
            )}
            initialPage={tabIndexFocused}
            onChangeTab={({ i }) => (
              this.setState({ tabIndex: i })
            )}
          >
            <Text tabLabel="关注" />
            <Text tabLabel="视频" />
            <Text tabLabel="热点" />
            <Text tabLabel="论坛" />
          </ScrollableTabView>
          { this.renderTabContent() }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
  },
  more: {
    color: Colors.primary,
    fontSize: FontsSize.small,
    marginVertical: Styles.Height(15),
    marginLeft: Styles.Width(270),
  },
});

export default connect(({ hot, videos }) => ({
  ...hot,
  ...videos,
}))(AttentionPage);
