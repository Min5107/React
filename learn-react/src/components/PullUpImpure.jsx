import React from 'react';

let counter = 10;
function PullUpImPure(props) {
    counter = counter+1
    console.log(counter);
    return (
        <p>
          나는 턱걸이를 {counter} 개 했습니다.  
        </p>
    );
}

export default PullUpImPure;