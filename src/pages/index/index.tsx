import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  render () {
    return (
      <View className='index' style={{WebkitLineClamp: 3, flexShrink: 1}}>
        Hello world!
      </View>
    )
  }
}
