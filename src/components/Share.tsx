"use client";
import React, {useState} from 'react'
import Image from "@/components/Image";
import NextImage from "next/image";

import {shareAction} from "@/actions";
import ImageEditor from "@/components/ImageEditor";

const Share = () => {
    const [media, setMedia] = useState<File | null >(null);
    const [isEditorOPen, setIsEditorOpen] = useState(false);
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square",
        sensitive: boolean;
    }>({
        type: "original",
        sensitive : false,

    });

    const handelMediaChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files && e.target.files[0]) {
          setMedia(e.target.files[0]);
      }
    };
    const previewURL = media ? URL.createObjectURL(media) : null;


    return (
        <form className="p-4 flex gap-4" action={shareAction}>
            {/*Avatar*/}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image path={"general/avatar.png"} alt={""} w={100} h={100} tr={true}/>
            </div>
            {/*Others*/}
            <div className="flex-1 flex flex-col gap-4">
                <input type="text" placeholder={"What is Happening ?!"} className="bg-transparent outline-none placeholder:text-textGray text-xl"
                 name="desc"
                />
                {/*Preview Image*/}
                {
                    previewURL && <div className="relative rounded-xl overflow-hidden">
                        <NextImage src={previewURL} alt="" width={600} height={600}/>
                        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold test-sm cursor-pointer" onClick={()=> setIsEditorOpen(true)}>Edit</div>
                    </div>
                }
                {isEditorOPen && previewURL && (
                    <ImageEditor onClose={()=> setIsEditorOpen(false)}
                                 previewURL={previewURL}
                                 settings={settings}
                                 setSettings={setSettings}
                    />)}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap">
                        <input type="file" onChange={handelMediaChange} className="hidden" id="file" name="file"/>
                        <label htmlFor="file">
                        <Image path="icons/image.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                        </label>
                        <Image path="icons/gif.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                        <Image path="icons/poll.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                        <Image path="icons/emoji.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                        <Image path="icons/schedule.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                        <Image path="icons/location.svg" alt={""} w={20} h={20} className="cursor-pointer"/>
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">
                        Post
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Share
