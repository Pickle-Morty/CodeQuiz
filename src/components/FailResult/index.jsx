import React from 'react';
import "./styles.scss"
import {Logo, AmongAss, PackMan} from "../../assets/img"
import { NavLink } from 'react-router-dom';
import Result from '../common/Result';

const Fail = ({data}) => {
    return (
      <Result data={data} />
    )
}

export default Fail