import type { NextPage } from "next";

import NotFoundModule from "modules/NotFound";

const NotFound: NextPage = () => {
  return <NotFoundModule />;
};

export const getStaticProps = () => {
  return { props: {} };
};

export default NotFound;
