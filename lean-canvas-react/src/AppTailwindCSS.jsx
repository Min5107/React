import React from 'react';
import TailwindButton from './components/TailwindCss/TailwindButton'
function AppTailwindCSS() {
    return (
        <div>
            <h1 className='text-sky-300 font-bold underline'>Hello World!</h1>
            <TailwindButton>TailwindButton</TailwindButton>
        </div>
    );
}

export default AppTailwindCSS;