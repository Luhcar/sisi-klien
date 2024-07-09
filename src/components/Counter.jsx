// penggunaan useState

import React, { useState } from 'react';
import {connect} from 'react-redux'

function Counter({counter, increment, decrement}) {

  return (
    <div>
      <p className="flex flex-col justify-center items-center mb-3 text-2xl">Counter: {counter}</p>
      <button className="bg-slate-700 rounded-md h-10 px-6 font-semibold mr-5" onClick={increment}>Increment</button>
      <button className="bg-slate-700 rounded-md h-10 px-6 font-semibold" onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);