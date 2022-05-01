import type { NextPage } from "next";

import HomeModule from "modules/Home";

const Home: NextPage = () => {
  return <HomeModule />;
};

export const getStaticProps = () => {
  return { props: {} };
};

export default Home;
