import { useRouter } from "next/router";
import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";

const WorksDetailPage: NextPage = () => {
  const mobile = useMobile();
  const router = useRouter();
  const { id } = router.query;

  if (mobile) return <MobileWorkDetail />;

  return (
    <div>
      <h1>WorksDetailPage</h1>
      <p>{id}</p>
    </div>
  );
};

function getServerSideProps() {
  return {
    props: {},
  };
}

export default WorksDetailPage;
