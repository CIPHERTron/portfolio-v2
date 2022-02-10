import { BlogJsonLd, NextSeo } from "next-seo";

import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import type { BlogPostProps } from "./types";

type BlogPostMetaProps = Pick<BlogPostProps, "postData">;

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  const ogImage = PSOgImage(postData.title);
  const pageUrl = `${baseUrl}/blog/${postData.id}`;

  return (
    <>
      <NextSeo
        title={postData.title}
        canonical={pageUrl}
        openGraph={{
          title: `${postData.title} | Pritish`,
          url: pageUrl,
          images: [
            {
              url: ogImage,
              alt: `${postData.title} og-image`,
            },
          ],
        }}
      />

      <BlogJsonLd
        url={`${baseUrl}/blog/${postData.id}`}
        title={`${postData.title} | Pritish`}
        images={[]}
        datePublished={new Date(postData.date).toISOString()}
        dateModified={new Date(postData.date).toISOString()}
        authorName="Pritish Samal"
        description={`A blog post by Pritish Samal explaining about ${postData.title}`}
      />
    </>
  );
};

export default BlogPostMeta;
