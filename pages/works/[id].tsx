import { useRouter } from "next/router";
import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";
import WorksDetail from '@components/desktop/works/[id]';

const WorksDetailPage: NextPage = () => {
  const mobile = useMobile();
  const router = useRouter();
  const { id } = router.query;

  if (mobile) return <MobileWorkDetail />;
    else return <WorksDetail/>;
};

function getServerSideProps() {
  return {
    props: {},
  };
}

export default WorksDetailPage;
