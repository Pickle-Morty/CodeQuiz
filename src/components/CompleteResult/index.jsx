import React from 'react';
import "./styles.scss"
import Result from '../common/Result';

const Complete = ({ data }) => {
  return (
    <section className="complete">
      <Result data={data} />
    </section>
  )
}

export default Complete