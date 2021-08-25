import React from 'react';
import "./styles.scss"
import Result from '../common/Result';
import { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Complete = ({ data }) => {
  return (
    <section className="complete">
      <Result data={data} />
    </section>
  )
}

export default Complete