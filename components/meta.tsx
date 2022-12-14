import Head from "next/head";

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <html prefix="og: https://ogp.me/ns#">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link
          rel="shortcut icon"
          //   href="/images/"
          type="image/x-icon"
        />
        <meta
          property="og:url"
          content="http://portfolio-abid-hasan.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Get to know Abid Hasan" />
        <meta property="og:description" content="Get to know Abid Hasan" />

        <meta name="twitter:title" content="Get to know Abid Hasan" />
        <meta
          name="twitter:description"
          content="Learn how to offset your company’s water consumption and make products, events or your entire company Water Positive."
        />

        <title>Abid Hasan</title>
      </Head>
    </html>
  );
};

Meta.defaultProps = {
  title: "Abid Hasan",
  keywords: "abid, abid hasan, abid hasan portfolio",
  description: "Get to know Abid Hasan",
};

export default Meta;
