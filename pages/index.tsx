import type { NextPage } from "next";
import Works from "../components/Desktop/works";
import useMobile from "../hooks/mobile";
import MobileHome from "../components/mobile";

const Home: NextPage = () => {
  const mobile = useMobile();
  return <MobileHome/>;
};

export default Home;
