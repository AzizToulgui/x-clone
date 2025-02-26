import Image from "next/image";

const ImageEditor = ({onClose, previewURL, settings, setSettings} : {
    onClose: () => void,
    previewURL: string,
    settings : {type: "original" | "wide" | "square", sensitive: boolean; },
    setSettings : React.Dispatch<React.SetStateAction<{type: "original" | "wide" | "square" ;    sensitive: boolean; }>>
}) => {

    const handelChangeSensitive = (sensitive: boolean) =>{
        setSettings(prev=>({...prev, sensitive}));
    }

    return (
        <div className="fixed w-screen h-screen left-0 right-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
                {/*Top*/}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                    <svg width={32} onClick={onClose}
                         className="cursor-pointer"
                        viewBox="0 0 24 24">
                        <path
                            fill="#e7e9ea"
                            d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"/>
                    </svg>
                    <h1 className="font-bold text-xl">Media Settings</h1>
                    </div>
                    <button className="py-2 px-4 rounded-full bg-white text-black font-bold">Save</button>
                </div>
                {/*Image Container*/}
                <div className="w-[600px] flex items-center ">
                    <Image src={previewURL} width={600} height={600} alt={""} className={`w-full ${settings.type === "original" ? "h-full object-contain " : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`} />
                </div>
                {/*Settings*/}
                <div className="flex items-center justify-between text-sm ">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <svg width={24} viewBox="0 0 24 24">
                                <path
                                    className={settings.type === 'original'? 'fill-iconBlue' : 'fill-[#e7e9ea]'}
                                    d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"/>
                            </svg>
                                Original
                        </div>
                    </div>
                    <div className={`cursor-pointer py-1 px-4 rounded-full text-black ${settings.sensitive ? "bg-red-500" : "bg-white"}`}
                    onClick={() => handelChangeSensitive(!settings.sensitive)}>
                        Sensitive
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageEditor
