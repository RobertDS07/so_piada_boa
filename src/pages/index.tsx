import type { NextPage } from "next";

import WelcomeModule from "modules/Welcome";

const Welcome: NextPage = () => {
  return <WelcomeModule />;
};

export const getStaticProps = () => {
  return { props: {} };
};

export default Welcome;
