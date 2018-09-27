import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  ActivityIndicator,
} from 'antd-mobile';
import classnames from 'classnames'
import styles from './style.less'

const BMap = window.BMap;


@connect(({ main, global, loading }) => {
  return {
    main,
    global,
    loading: loading.models.main,
  };
})

class ReactComponent extends Component {
  state = {};

  componentDidMount() {

  }

  render() {

    return (
      <Fragment>
        aaa
      </Fragment>
    );
  }
}

export default ReactComponent
