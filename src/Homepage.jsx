import { useState } from 'react';
import LeftBar from './components/LeftBar';
import RightSide from './components/RightSide';
import { ThemeContext } from './context/context';

export default function Homepage() {

const [region, setRegion] = useState('all'); 
const [selectedCountries, setSelectedCountries] = useState([]); 

    return (
        <>
            <ThemeContext.Provider value={{region, setRegion, selectedCountries,setSelectedCountries}}>
                <div className='flex justify-between h-screen'>
                    <LeftBar />
                    <RightSide />
                </div>
            </ThemeContext.Provider>

        </>
    )
}