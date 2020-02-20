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
    <Sidebar/>

    <div className="container-fluid">
      <Section title="about" hideTitle={true}>
        <div className="subheading mb-3">
          <p><h1 className="mb-0">{config.firstName} {config.lastName}</h1></p>
          <p><h2 className="mb-0">Software Engineer</h2></p>
          <p>{config.address}</p>
          <p>{config.phone}</p>
          <p><a href={`mailto:${config.email}`}>{config.email}</a></p>
        </div>

        <SocialIcons/>
      </Section>

      <Section title="experience">
        <Experience
          title="Software Engineer"
          company="Nexgen Development Group | nexgen.bg"
          description="B2B Media Group software products."
          stack="Ruby on Rails, Javascript, MySQL, Clickhouse, Kafka, Elasticsearch, Redis, Docker"
          period="March 2021 - Present"
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems"
          ]}
        >
        </Experience>

        <Experience
          title="Web Engineer"
          company="Metrilo Ltd | metrilo.com"
          description="SaaS startup, providing e-commerce DC brands with a growth platform (actionable insights, analytics, emails, automation, CRM, and more)."
          stack="Ruby on Rails, Ember Js, MongoDB, Redis, Docker, Kubernetes"
          period="February 2015 - March 2021"
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems",
            "Infrastructure support"
          ]}
        >
        </Experience>

        <Experience
          title="Web Engineer"
          company="Elevatecompany Ltd | elevatecompany.eu"
          description="Software development agency (media websites, web and mobile apps, e-commerce solutions)"
          stack="Ruby on Rails, Javascript, MySQL, Elasticsearch, Redis, Docker, AWS"
          period="January 2020 - Present"
          responsibilities={[
            "Full-stack web development"
          ]}
        >
        </Experience>

        <Experience
          title="TD"
          company="Cinemotion Ltd | cinemotion.bg"
          description="VFX House"
          stack="Python, VEX"
          period="September 2012 - January 2015"
          responsibilities={[
            "3D scanning pipeline development",
            "Development and maintenance of VFX tools"
          ]}
        >
        </Experience>
      </Section>

      <Section title="skills">
        <SkillSet
          title="Domains"
          subtitle="Web, E-commerce, Analytics, Big Data, Ads, Emails, Shopify, Creative Coding &amp; VFX"
        >
        </SkillSet>

        <SkillSet
          title="Paradigms"
          subtitle="Object-oriented Programming, Functional Programming, Test-driven Development"
        >
        </SkillSet>

        <SkillSet
          title="Languages"
          subtitle="Ruby, Python, Javascript, Bash"
        >
        </SkillSet>

        <SkillSet
          title="Frameworks"
          subtitle="Rails, RSpec, Sidekiq, Ember Js, React Js, Mocha Js"
        >
        </SkillSet>

        <SkillSet
          title="Storage"
          subtitle="MySQL, Clickhouse, Kafka, MongoDB, Redis"
        >
        </SkillSet>

        <SkillSet
          title="Infrastructure"
          subtitle="Docker, Docker Compose, Kubernetes, Jenkins, GCP, AWS"
        >
        </SkillSet>

        <SkillSet
          title="Tools"
          subtitle="Git, Sublime Text, VS Code"
        >
        </SkillSet>
      </Section>

      <Section title="education">
        <Education
          place="Technical University Sofia, Bulgaria"
          degrees="Bachelor of Engineering, Master of Engineering"
          period="September 2007 - September 2013"
        >
        </Education>

        <Education
          place="PMG Vasil Levski Smolyan, Bulgaria"
          degrees="High School, Mathematics and Computer Science"
          period="September 2002 - June 2007"
        >
        </Education>
      </Section>

      <Section title="interests">
        <SkillSet
          title="Other"
          subtitle="Opensource"
        >
        </SkillSet>
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
