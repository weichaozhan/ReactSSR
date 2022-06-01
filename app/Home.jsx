import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getHomeList } from '../actions/index';

const Home = (props) => {
  const { list, name } = props;

  const handleClick = () => {
    props.getHomeList();
  };

  
  useEffect(() => {
    props.getHomeList();
  }, []);

  return (
    <div>
      <div>It's Home {name}</div>
      <button onClick={handleClick}>
        test
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
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
