import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/project'>
            Documentation
          </Link>
          <Link className='button button--secondary button--lg' to='/blog'>
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from SnapQuest Meta`}
      description='Documentation for the SnapQuest project'
    >
      <HomepageHeader />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem 0",
          width: "100%",
        }}
      >
        <div className='container'>
          <p>
            Use our platform at <a href='https://snapquest.app'>https://snapquest.app</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
