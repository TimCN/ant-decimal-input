/*
 * @Author: tim huang 
 * @Date: 2018-08-30 09:29:20 
 * @Last Modified by: tim huang
 * @Last Modified time: 2018-08-30 10:55:16
 */

import React, { Component } from 'react'
import { Input } from 'antd'


export default class DecimalInput extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    decimalLen: 2
  }
  onChange = (e) => {
    let val = e.target.value
    if (val) {
      const { decimalLen } = this.props
      const lastChar = val.substr(val.length - 1)
      val = parseFloat(val)
      if (isNaN(val)) val = 0
      val = val.toString()
      const rawMissPart = e.target.value.replace(val, "")
      if (/^\.?0+$/.test(rawMissPart)) val += rawMissPart
      const pointIndex = val.indexOf(".")
      if (pointIndex > -1 && val.length > pointIndex + decimalLen) {
        val = val.substr(0, pointIndex + decimalLen + 1)
      } else if (lastChar === ".") {
        val += lastChar
      }
    }
    this.props.onChange && this.props.onChange(val)
  }
  render() {
    const { onChange, decimalLen, ...others } = this.props
    return <Input {...others} onChange={this.onChange} ref="decimalInput" />
  }
}