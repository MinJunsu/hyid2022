import { useRouter } from "next/router";
import type { NextPage } from "next";

const WorksDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
