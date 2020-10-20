import { skeletonBackground } from './skeleton.module.css';

export default function Skeleton({ children }) {
  return (
    <>
      <section className={`${skeletonBackground} w-full block`}>{children}</section>
      <style jsx>{`
        div {
          overflow: hidden;
        }
        div > :global(*) {
          background-color: red;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
