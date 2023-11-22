import React from 'react';

class State extends React.Component{
    render(){
      let count = 0
      const plus = () => {
        count = count + 1
        console.log(count);
      }
      const minus = () => {
        count = count - 1
        console.log(count);
      }

      return(
        <div>
          <h1>State {count}</h1>
          
        </div>
      )
    }
}

export default State;
