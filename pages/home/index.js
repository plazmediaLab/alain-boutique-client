import Layount from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import useGetData from 'hooks/useGetData';

function Home({ logged }) {
  const [loading] = useGetData(logged);

  return (
    <Layount>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full p-2 pb-16 sm:pb-2">
          <h1>Home page...</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolor cumque nobis ab
            assumenda ipsa animi aut enim, recusandae voluptatibus corrupti, nam fugit et dolorem,
            modi harum laborum autem provident quod ipsam nostrum? Totam corporis nisi laudantium
            vero molestias dolorem velit voluptatum consequatur ducimus ullam explicabo dolor,
            eveniet quaerat ratione eius qui optio voluptatibus porro architecto neque delectus
            atque! Delectus debitis aspernatur minus at quis fuga commodi repellendus, velit ipsa
            adipisci vitae. Corrupti soluta dicta, commodi illo ullam sed nisi et dolorem impedit
            eius libero minima, veniam amet voluptates! Quia, autem eos nobis odit excepturi vitae,
            minima quibusdam molestias ducimus facere, neque magni. Possimus, quo ex! Alias,
            architecto accusamus? Soluta vitae odit debitis nemo sequi qui dolore odio
            exercitationem quas rerum libero alias facere doloremque, accusantium atque deleniti
            quis optio, ratione perferendis impedit quidem eos? Vel exercitationem, quas voluptas
            eligendi optio culpa, nemo natus blanditiis unde vero deleniti deserunt amet animi
            officia tenetur necessitatibus aperiam. Pariatur, natus non. Placeat praesentium rem
            consequuntur debitis eius quo quasi quas vel blanditiis, dolore enim, cum perferendis
            eligendi ratione tempore sint soluta! Sunt obcaecati facilis minus incidunt officia
            amet, assumenda earum aliquid voluptatum voluptate reprehenderit quidem error hic,
            quaerat quasi harum, explicabo ullam nihil quis enim alias totam. Deserunt ipsa aliquam
            eligendi obcaecati quia? Unde alias voluptatem eaque expedita incidunt sed, quis vero
            dolores nam necessitatibus hic maxime neque aspernatur harum pariatur iusto autem
            temporibus similique a. Debitis labore facilis modi eveniet, architecto hic possimus
            esse quam iusto, minima obcaecati amet porro sit. Ipsa quidem suscipit reprehenderit
            dolore accusantium amet iste ab adipisci voluptatum, repellendus expedita. Quis deleniti
            aperiam totam ea perferendis inventore sint maxime nulla ducimus cum quo consectetur,
            amet quos, repudiandae dicta provident soluta sequi praesentium distinctio. Quibusdam
            dicta inventore dignissimos ipsa assumenda sequi vel, totam nesciunt beatae
            necessitatibus ut, earum aliquid!
          </p>
        </div>
      )}
      <NavBar />
    </Layount>
  );
}

export default withAuth(Home);
