import Content from "./Content";
import TopBar from "./TopBar";

export default function RightSide() {


    return (
        <>
            <div className="ms-[40%] md:ms-[30%] lg:ms-[20%] flex flex-col h-screen w-full">
                <TopBar />
                <Content />
            </div>
        </>
    )
}