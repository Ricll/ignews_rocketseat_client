import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>How to create a full-bleed layout using CSS grid</strong>
            <p>The term “full-bleed” comes from print design. </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>How to create a full-bleed layout using CSS grid</strong>
            <p>The term “full-bleed” comes from print design.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>How to create a full-bleed layout using CSS grid</strong>
            <p>The term “full-bleed” comes from print design. </p>
          </a>

        </div>
      </main>
    


    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

 
 

return { 
  props: {}
}
}

 // console.log(response)
  // console.log(JSON.stringify(response, null, 2))