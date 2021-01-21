import React from 'react'

const Loader = props => (

    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
);

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;