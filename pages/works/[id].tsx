import { useRouter } from "next/router";
import type { NextPage } from "next";
import WorksDetail from '@components/desktop/works/[id]';

const WorksDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        <WorksDetail/>
    </div>
  );
};

function getServerSideProps() {
  return {
    props: {},
  };
}

export default WorksDetailPage;
