import React from 'react'
import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";
import PostInteractions from "@/components/PostInteractions";
import {imagekit} from "@/utils";

interface FileDetailsResponse {
    width : number;
    height : number;
    filePath : string;
    url : string;
    fileType : string;
    customMetadata : {sensitive : boolean};
}

const Post = async () => {
    const getFileDetails = async (fileId: string): Promise<FileDetailsResponse>=> {
        return new Promise((resolve, reject) => {
            imagekit.getFileDetails(fileId, function(error, result) {
                if(error) reject(error);
                else resolve(result as FileDetailsResponse);
            });
        });
    };

    const fileDetails = await getFileDetails("67c0431e432c476416681fce");
    console.log(fileDetails);
    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            {/*Post Type*/}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path
                        fill={"#71767b"}
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span className="">Dasssh Reposted</span>
            </div>
            {/*Post Content*/}
            <div className="flex gap-4">
                {/*Avatar*/}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image path="general/avatar.png" alt={""} w={100} h={100} tr={true} />
                </div>
                {/*Content*/}
                <div className="flex-1 flex flex-col gap-2">
                    {/*Top Section*/}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold">Dasssh</h1>
                            <span className="text-textGray">@Dasssh-69</span>
                            <span className="text-textGray">1 day ago</span>
                        </div>
                        <PostInfo/>
                    </div>
                    {/*Text and Media*/}
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam assumenda dolore, nemo nisi non omnis qui quidem quisquam quod
                        quos, saepe tempore voluptatem voluptatum! Aspernatur at dolor dolore
                        dolores excepturi fugit laborum magni minima nam odio pariatur provident quasi, saepe.
                    </p>
{/*
                    <Image path="general/post.jpeg" alt={""} w={600} h={600} />
*/}
                    {fileDetails && (<Image path={fileDetails.filePath} alt={""} w={fileDetails.width} h={fileDetails.width} className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}/>)}
                    <PostInteractions/>
                </div>
            </div>
        </div>
    )
}
export default Post
