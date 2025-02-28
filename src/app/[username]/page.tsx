import Link from "next/link";
import Image from "@/components/Image";
import Feed from "@/components/feed";


const UserPage = () => {
    return (
        <div className="">
            {/*Profile Title*/}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href=""><Image path="icons/back.svg" alt="back button" w={24} h={24}/></Link>
                <h1 className="font-bold text-lg">Dasssh</h1>
            </div>
            {/*Info*/}
            <div className="">
                {/*Cover and Avatar Container*/}
                <div className="relative w-full ">
                    {/*Cover*/}
                    <div className="w-full aspect-[3/1] relative ">
                        <Image path="general/cover.jpg" alt="cover banner" w={600} h={200} tr={true}/>
                    </div>
                    {/*Avatar*/}
                    <div className="w-1/5 aspect-square  rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2  ">
                        <Image path="general/avatar.png" alt="cover banner" w={100} h={100} tr={true}/>
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="more icon" w={20} h={20}/>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="more icon" w={20} h={20}/>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="more icon" w={20} h={20}/>
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
                </div>
                {/*User Details*/}
                <div className="p-4 flex flex-col gap-2">
                    {/*UserName & Handel*/}
                    <div className="">
                        <h1 className="text-2xl font-bold ">Dasssh</h1>
                        <span className="text-textGray text-sm">@Its_Dasssh</span>
                    </div>
                    <p className="">Dasssh X profile welcome</p>
                    {/*Job & Location & Date*/}
                    <div className="flex gap-4 text-textGray text-[15px]">
                        <div className="flex items-center gap-2">
                            <Image path="icons/userLocation.svg" alt="location" w={20} h={20}/>
                            <span>Tunisia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="Date" w={20} h={20}/>
                            <span>Joined october 2025</span>
                        </div>
                    </div>
                    {/*Followings & Followers*/}
                    <div className="flex gap-4 ">
                        <div className="flex items-center gap-2 ">
                            <span className="font-bold" >1.5M</span>
                            <span className="text-textGray text-[15px]">Followers</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <span className="font-bold" >258</span>
                            <span className="text-textGray text-[15px]">Followings</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*Feed*/}
            <Feed/>
        </div>
    )
}
export default UserPage
