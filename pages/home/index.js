import Layout from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import useGetData from 'hooks/useGetData';
import HomeContent from 'components/home/home-content';

function Home({ logged }) {
  const [loading] = useGetData(logged);

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full p-2 sm:p-3 pb-16 sm:pb-2 bg-white">
          <HomeContent />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias error sapiente
            deserunt ea voluptatem laborum libero culpa! Animi doloremque sunt fuga ea aspernatur
            commodi totam dicta quisquam eaque voluptatibus, in nesciunt harum voluptates alias
            dolorem error accusantium aut neque magnam? Tenetur odio, accusamus dolorem voluptas
            veniam est veritatis architecto laudantium molestias. Tenetur quidem minima quam
            consectetur harum eaque optio enim magni at culpa necessitatibus maxime fugiat vel
            voluptates doloremque ut aliquam assumenda debitis sit aliquid totam, voluptatibus
            voluptas! Dolorem pariatur illo officiis, voluptates dolorum rerum itaque sapiente atque
            quos architecto libero fugit consectetur molestias, dolor amet. Eaque sequi harum iste
            repellat, natus, vel illum, quasi quis repudiandae quidem ea dolore laboriosam eius.
            Maiores pariatur nisi consequatur eaque possimus, recusandae, iusto molestias eum
            eligendi expedita iure ducimus facere officia quidem, quis ex enim nihil reprehenderit
            delectus. Inventore, perspiciatis repellat nulla quas ipsa aliquid omnis hic, error
            possimus reiciendis vero quis reprehenderit placeat aspernatur natus. In et delectus at
            exercitationem eveniet laborum repudiandae voluptatum facilis eaque provident
            voluptatibus harum minima, amet deserunt veniam qui. Sunt aspernatur totam inventore
            esse laudantium dolores
          </p>
          <br />
          <p>
            qui et magni sint, quas fugiat molestias quod sequi animi tenetur omnis architecto minus
            optio velit facilis earum tempora suscipit ea? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cum nemo error reprehenderit molestias, asperiores cumque vitae
            tenetur, atque recusandae fugiat cupiditate quis numquam iusto quo officia non.
            Recusandae quae velit nihil maxime voluptas, eaque ratione omnis veritatis rem vero
            tenetur, praesentium eius magnam quidem dolore neque explicabo repellendus maiores alias
            placeat? Accusamus quae esse magni veniam corrupti perspiciatis voluptas nulla! Ullam,
            temporibus consectetur, delectus dolorum odit atque voluptatibus tempore fuga cumque
            quidem aliquam fugiat blanditiis excepturi facere tempora praesentium nobis saepe
            corporis asperiores iure veniam magni vitae iste. Unde atque officiis suscipit ea quod
            quas quam vitae, harum distinctio hic!
          </p>
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(Home);
