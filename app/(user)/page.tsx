import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post']{
   ...,
   author->,
   categories[]->
} | order(_creadtedAt desc)
`;

export const revalidate = 30;

async function page() {
   const posts = await client.fetch(query);

   return <BlogList posts={posts} />;
}

export default page;
