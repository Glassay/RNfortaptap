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
 *     Initial: 2018/03/15        Cheng Jifeng
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Badge,
  Divider,
} from 'react-native-elements';

import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

export default class LabelTabBar extends React.Component {
  renderItem(tab, i) {
    const colors = this.props.activeTab === i ? Colors.white : Colors.gray2;
    const bgColor = this.props.activeTab === i ? Colors.primary : Colors.gray;
    return (
      <View style={styles.layout}>
        <TouchableOpacity
          activeOpacity={1}
          key={i}
          onPress={() => this.props.goToPage(i)}
          style={styles.tab}
        >
          <Divider />
          <Badge containerStyle={{ backgroundColor: bgColor }}>
            <Text style={{ color: colors }}>{this.props.tabNames[i]}</Text>
          </Badge>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.tab}>
        {this.props.tabs.map((tab, i) => this.renderItem(tab, i))}
      </View>
    );
  }
}

LabelTabBar.propTypes = {
  goToPage: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  tabs: PropTypes.array.isRequired,
  tabNames: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    height: Styles.Height(80),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
