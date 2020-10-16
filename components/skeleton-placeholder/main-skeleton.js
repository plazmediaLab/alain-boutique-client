import styles from './styles';
import { skeletonBackground } from './skeleton.module.css';

export default function MainSkeleton() {
  return (
    <section className="flex flex-col min-h-full">
      <div className="flex-1 flex items-center justify-center">
        <main className="w-1/2 h-full">
          <h3 className="text-center my-5 text-alain-blue-700 tracking-wide text-sm">
            Cargando...
          </h3>
          <div className={`${skeletonBackground} p-4 bg-alain-blue-200 rounded-container`}></div>
        </main>
      </div>

      <style jsx>{styles}</style>
    </section>
  );
}
