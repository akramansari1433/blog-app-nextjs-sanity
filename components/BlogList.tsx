import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
   posts: Post[];
};

function BlogList({ posts }: Props) {
   return (
      <div>
         <hr className="border-black mb-10" />
         <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 ">
            {posts.map((post) => (
               <ClientSideRoute
                  key={post._id}
                  route={`/post/${post.slug.current}`}
               >
                  <div className="flex flex-col group cursor-pointer">
                     <div
                        className="w-full relative h-80 drop-shadow-xl 
                        group-hover:scale-105 transition-transform duration-200 ease-out"
                     >
                        <Image
                           className="object-cover object-left lg:object-center"
                           src={urlFor(post.mainImage).url()}
                           alt={post.author.name}
                           fill
                           loading="eager"
                        />
                        <div
                           className="absolute bottom-0 w-full bg-opacity-20 bg-black 
                        backdrop-blur-lg rounded drop-shadow-lg text-white  p-5 flex justify-between"
                        >
                           <div>
                              <p className="font-bold">{post.title}</p>
                              <p>
                                 {new Date(post._createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                       day: "numeric",
                                       month: "long",
                                       year: "numeric",
                                    }
                                 )}
                              </p>
                           </div>
                           <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                              {post.categories?.map((category) => (
                                 <div
                                    key={category._id}
                                    className="text-center bg-black px-3 py-1 rounded-full text-sm font-semibold"
                                 >
                                    <p>{category.title}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="mt-5 flex-1">
                        <p className="underline text-lg font-bold">
                           {post.title}
                        </p>
                        <p className="line-clamp-2 text-black">
                           {post.description}
                        </p>
                     </div>
                     <p className="mt-2 text-blue-700 font-bold flex items-center group-hover:underline group-hover:decoration-blue-700">
                        Read Post
                     </p>
                  </div>
               </ClientSideRoute>
            ))}
         </div>
      </div>
   );
}

export default BlogList;
