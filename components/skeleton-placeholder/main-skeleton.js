import Skeleton from './skeleton';
import styles from './styles';

export default function MainSkeleton() {
  return (
    <section className="flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* <h3 className="text-center my-5 text-alain-blue-700 tracking-wide text-sm">Cargando...</h3> */}
        <div className="w-2/3">
          <Skeleton>
            <div className="w-32 h-32 mx-auto rounded-full mb-5"></div>
            <div className="p-4 w-full rounded-card mb-5"></div>
            <div className="p-4 w-1/3 rounded-card mb-5"></div>
            <div className="p-4 w-4/5 rounded-card mb-5"></div>
            <div className="p-4 w-4/5 rounded-card mb-5"></div>
            <div className="p-4 w-1/3 rounded-card mb-5"></div>
          </Skeleton>
        </div>
      </div>

      <style jsx>{styles}</style>
    </section>
  );
}
