import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import Experience from '../components/Experience';
import Education from '../components/Education';
import SkillSet from '../components/SkillSet';
import SocialIcons from '../components/SocialIcons';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div className="container-fluid">
      <Section title="about" hideTitle={true}>
        <div className="subheading mb-3">
          <p><h1 className="mb-0">{config.firstName} {config.lastName}</h1></p>
          <p><h2 className="mb-0">Software Engineer</h2></p>
          <p>{config.address}</p>
          <p>{config.phone}</p>
          <p><a href={`mailto:${config.email}`}>{config.email}</a></p>
        </div>

        <p>
          I am a self-motivated and predominantly self-taught individual with strong technical and math foundations. I embrace opportunities to step into the unknown, tackling challenges that push me beyond my current knowledge and experience.
        </p>

        <SocialIcons />
      </Section>

      <Section title="experience">
        <Experience
          title="Blockchain Engineering Team Lead"
          company="LimeChain - limechain.tech"
          description="Web3 & Blockchain Solutions - Blockchain Protocols | Tooling | DApps | ZK | DeFi | NFTs | DAOs"
          period="May 2023 - Present"
          projects={[
            "Vultisig - Multi-chain MPC(TSS) wallet and AI crypto automations",
            "BitcoinOS Rollup - L2 rollup based on the Polygon CDK stack and Bitcoin as L1",
            "Taiko preconfs - Transaction preconfirmations PoC based on Geth, Taiko client, GMEV boost, and more",
            "Gosemble - Alternative Go-based framework for building Polkadot/Substrate compatible parachains",
            "TinyGo-based toolchain - Custom WASM target and GC implementation"
          ]}
          responsibilities={[
            "Research",
            "Architecture of blockchain solutions",
            "Blockchain protocol development",
            "Documentation",
          ]}
          stack="Go, Rust, Solidity, Javascript, React Js, LLVM, WebAssembly, Docker, Bitcoin, Ethereum, Polygon, Polkadot"
        >
        </Experience>

        <Experience
          title="Senior Blockchain Engineer"
          company="LimeChain - limechain.tech"
          description="Web3 & Blockchain Solutions - Blockchain Protocols | Tooling | DApps | ZK | DeFi | NFTs | DAOs"
          period="May 2022 - 2023"
          projects={[
            "Research - Alternative tech for buillding on Polkadot",
            "PoC - Substrate compatible Runtime implementation in Go (SCALE codec, runtime modules implementation)",
            "PoC - TinyGo-based toolchain (Wasm target and GC implementation)"
          ]}
          responsibilities={[
            "Research",
            "Architecture of blockchain solutions",
            "Blockchain protocol development",
            "Documentation",
          ]}
          stack="Go, Rust, WebAssembly, Docker, LLVM, Polkadot"
        >
        </Experience>

        <Experience
          title="Senior Software Engineer"
          company="B2B Media Group - b2bmg.com"
          description="Global data, marketing solutions, and insights - Account-based marketing | Display advertising | Content syndication | Qualified lead generation"
          period="Jan 2022 - March 2022"
          projects={[
            "Enterprise software platform - gathering and processing data from multiple sources and providing insights to the end-users",
          ]}
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems"
          ]}
          stack="Ruby on Rails, Javascript, MySQL, Clickhouse, Kafka, Redis, Docker, Kubernetes"
        >
        </Experience>

        <Experience
          title="Senior Software Engineer"
          company="Nexgen Development Group - www.nexgen.bg"
          description="Software development company"
          period="March 2021 - January 2022"
          projects={[]}
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems"
          ]}
          stack="Ruby on Rails, MySQL, Clickhouse, Kafka, Elasticsearch, Redis, Docker"
        >
        </Experience>

        <Experience
          title="Full Stack Engineer"
          company="Elevatecompany Ltd - elevatecompany.eu"
          description="Software development agency - Media websites | Web apps | Mobile apps | E-commerce solutions"
          period="January 2020 - March 2021"
          projects={[
            "News media platform - content management, analytics, and advertisement",
            "Football platform - news, statistics, predictions, betting and advertisement",
            "Custom e-commerce integration",
          ]}
          responsibilities={[
            "Full-stack web development",
          ]}
          stack="Ruby on Rails, Javascript, MySQL, Elasticsearch, Redis, Docker, AWS"
        >
        </Experience>

        <Experience
          title="Web Engineer"
          company="Metrilo Ltd - metrilo.com"
          description="Plug-n-play growth platform for e-commerce brands"
          period="February 2015 - March 2021"
          projects={[
            "Main platform - data collection, analytics, emails, automation, CRM, actionable insights",
            "Email microservice - email delivery and tracking",
            "Shopify plugin microservice - data collection and processing",
            "Custom templating library",
            "Admin panel",
          ]}
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems",
            "Infrastructure support"
          ]}
          stack="Ruby on Rails, Ember Js, MongoDB, Redis, Docker, Kubernetes"
        >
        </Experience>
      </Section>

      <Section title="skills">
        <SkillSet
          title="Domains"
          subtitle="Web, Blockchain, Smart Contracts, Cryptography, Big Data, Analytics, E-commerce, Advertisement, VFX"
        >
        </SkillSet>

        <SkillSet
          title="Paradigms"
          subtitle="Object-oriented, Functional, Concurrent Programming, Test-driven Development"
        >
        </SkillSet>

        <SkillSet
          title="Languages"
          subtitle="Go, Rust, Solidity, Javascript, Python, Ruby, Bash"
        >
        </SkillSet>

        <SkillSet
          title="Frameworks/Libraries"
          subtitle="Foundry Toolkit, Hardhat, Ethers Js, Web3 Js, React Js, Rails, Sidekiq, NumPy"
        >
        </SkillSet>

        <SkillSet
          title="Storage"
          subtitle="MySQL, Postgresql, Clickhouse, MongoDB, Redis, Kafka"
        >
        </SkillSet>

        <SkillSet
          title="Infrastructure"
          subtitle="Docker, Docker Compose, Kubernetes, GCP, AWS"
        >
        </SkillSet>

        <SkillSet
          title="Tools"
          subtitle="Git, VSCode"
        >
        </SkillSet>
      </Section>

      <Section title="education">
        <Education
          place="Sofia University St. Kliment Ohridski, Bulgaria"
          degrees="Physics and Mathematics Program"
          period="October 2024 - Present"
        >
        </Education>

        <Education
          place="Technical University Sofia, Bulgaria"
          degrees="Bachelor of Engineering, Master of Engineering"
          period="September 2007 - September 2013"
        >
        </Education>

        <Education
          place='Highschool of Mathematics "Vasil Levski" Smolyan, Bulgaria'
          degrees="Mathematics and Computer Science"
          period="September 2002 - June 2007"
        >
        </Education>
      </Section>

      <Section title="interests">
        <SkillSet
          title="Open Source"
          subtitle="Privacy-preserving and decentralized tech"
        >
        </SkillSet>
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
