import { Fragment } from 'react';
import HeaderMeta from '../components/header-meta';
import Form from '../components/form';

export default function Home() {
  return (
    <Fragment>

      <HeaderMeta/>

      <main className="main-container">
        <Form/>
      </main>

      <style global jsx>{`
        
      `}</style>

    </Fragment>
  )
}
