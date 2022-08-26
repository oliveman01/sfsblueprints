import { GetServerSideProps } from "next";
import { db } from "../../lib/db";

const Rocket = () => {
  return (
    <div>
      
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const rocket = await db.blueprint.findUnique({
    where: {
      id: ctx.params
    }
  })

  return {
    props: rocket
  }
}

export default Rocket;