import Head from "next/head";

export default function Layout({title, keywords, description, children}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      {children}
    </Head>
  );
}

Layout.defaultProps = {
    title: 'Dj Events | Find the hottes parties',
    description: 'Find the latest Dj and other muscial events',
    keywords: 'music, dj, dem, events'
}