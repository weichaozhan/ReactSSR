import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import StaticContxt from '../context/staticContxt';
import { getHomeList } from '../actions/index';

import styles from './Home.css';

const Home = (props) => {
  const { list, name } = props;
  const staticContxt = useContext(StaticContxt);

  const handleClick = () => {
    props.getHomeList();
  };
  
  
  // 判断是否为服务端渲染环境
  if (staticContxt.insertCss) {
    staticContxt.insertCss(styles);
  }
  useEffect(() => {
    if (!list.length) {
      props.getHomeList();
    }
  }, []);

  return (
    <div>
      <div>It's Home {name}</div>
      <button onClick={handleClick}>
        test
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={styles['list-item']}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
};

Home.loadData = (store) => {
  return store.dispatch(getHomeList());
}

const mapStateToProp = state => ({
  list: state.home.list,
  name: state.home.name,
});

const mapDispatchToProps = dispatch => ({
  getHomeList: () => {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Home);
