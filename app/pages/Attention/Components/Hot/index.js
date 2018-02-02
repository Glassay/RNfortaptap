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
 *     Initial: 2018/02/1        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import FontsSize from '../../../../res/Fonts/size';
import Colors from '../../../../res/Colors';
import Styles from '../../../../res/Styles';

import Head from '../Head';
import Image from './Components/Image';
import Content from '../Content';
import Footer from '../Footer';

export default (props) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={props.details}
      renderItem={({ item }) => (
        <View>
          <Head
            iconImg={item.iconImg}
            title={item.title}
            from={item.from}
            count={item.count}
          />
          <Image image={item.image} />
          <Content
            cTitle={item.cTitle}
            cFrom={item.cFrom}
            cAvatar={item.cAvatar}
            cName={item.cName}
          />
          <Text style={styles.briefInfo}>{item.describe}</Text>
          <Footer
            time={item.time}
            likes={item.likes}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: Styles.Height(700),
    marginTop: Styles.Height(15),
    backgroundColor: Colors.white,
  },
  briefInfo: {
    fontSize: FontsSize.small,
    padding: Styles.Width(10),
  },
});
