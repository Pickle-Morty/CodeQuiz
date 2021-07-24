import React from 'react';
import "./styles.scss"
import Result from '../common/Result';

const Fail = ({data}) => {
    return (
     <section className="fail">
          <Result data={data} />
     </section>
    )
}

export default Fail