import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS feed for Pritish's blog posts"
        href="https://pritishsamal.com/rss.xml"
      />
    </Head>
  );
};

export default Meta;
