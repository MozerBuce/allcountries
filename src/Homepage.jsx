import LeftBar from './components/LeftBar';
import RightSide from './components/RightSide';

export default function Homepage() {
    return (
        <>
            <div className='flex justify-between h-screen'>
                <LeftBar />
                <RightSide />
            </div>
        </>
    )
}