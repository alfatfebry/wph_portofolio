import React from 'react';
import styles from './CareerJourneySection.module.scss';
import clsx from 'clsx';
import { Journey } from './Journey';
import { Section } from '../Section';

export const CareerJourneySection: React.FC = () => {
  return (
    <Section
      id='journey'
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      className={clsx(styles.journeyWrapper, 'container')}
    >
      <Journey>
        {/* {new Array(3).fill(null).map((_, index) => (
          <Journey.Item
            title='Fullstack Developer Internship'
            companyName='Binar Academy'
            dateFrom='2023'
            dateTo='2023'
            key={`${index}-item`}
          >
            {new Array(4).fill(null).map((_, index) => (
              <Journey.Description key={`${index}-item`}>
                Developed and maintained responsive web applications, improving
                load times by 30% through performance optimization.
              </Journey.Description>
            ))}
          </Journey.Item>
        ))} */}
        <>
          <Journey.Item
            title='FRONT END DEVELOPER'
            companyName='8Elements'
            dateFrom='2018'
            dateTo='2025'
          >
            <Journey.Description>
              Work with a small team to design and build software applications
              to function across multiple platform
            </Journey.Description>
            <Journey.Description>
              Led the implementation of responsive and user-friendly interfaces,
              ensuring cross-browser compatibility and optimal performance.
            </Journey.Description>
            <Journey.Description>
              Build reusable code and libraries for future use. Ensure the
              technical feasibility of UI/UX designs.
            </Journey.Description>
            <Journey.Description>
              Collaborated with cross-functional teams to align technical
              deliverables with business goals and improve team productivity.
            </Journey.Description>
            <Journey.Description>
              Streamlined development workflows by introducing tools and
              frameworks that enhanced efficiency and maintainability.
            </Journey.Description>
            <Journey.Description>
              Conducted knowledge-sharing sessions and workshops to upskill team
              members on React.js, SCSS, and modern web development practices.
            </Journey.Description>
            <Journey.Description>
              Troubleshot and resolved critical issues in production
              environments, ensuring minimal downtime and a seamless user
              experience.
            </Journey.Description>
            <Journey.Description>
              Produce front-end code and visual comps to create a polished and
              highly functional user interface with a focus on usability and
              simplicity of design.
            </Journey.Description>
            <Journey.Description>
              Conduct through testing of user interfaces in multiple platform to
              ensure all designs render correctly and systems function properly,
              incorporating feedback from actual potential users as well as
              members of the design team.
            </Journey.Description>
          </Journey.Item>

          <Journey.Item
            title='UI/UX & FRONT END DEVELOPER'
            companyName='Faims Media'
            dateFrom='2014'
            dateTo='2018'
          >
            <Journey.Description>
              Create and development the main product of the Faims Media company
              that is in the form of Loftez website and the partner website of
              the company.
            </Journey.Description>
            <Journey.Description>
              Develop new user interface feature.
            </Journey.Description>
            <Journey.Description>
              Collaborate with other team member and stakeholder
            </Journey.Description>
            <Journey.Description>
              Optimize application for maximum speed and scalability.
            </Journey.Description>
            <Journey.Description>
              Ensure the technical feasibility of UI/UX.
            </Journey.Description>
            <Journey.Description>
              Use graphic design software to create branding and logos
              incorporate visual element into programming with the goal of
              creating a streamlined design a pleasant but visually simple user
              interface.
            </Journey.Description>
            <Journey.Description>
              Solve any design or usability issues that arise and anticipate
              potential future problem so they can be resolved before they
              impact users.
            </Journey.Description>
          </Journey.Item>

          <Journey.Item
            title='HTML DESIGNER'
            companyName='Web Architect'
            dateFrom='2010'
            dateTo='2013'
          >
            <Journey.Description>
              Is a digital agency and Google Partner based in Jakarta,
              Indonesia.
            </Journey.Description>
            <Journey.Description>
              Troubleshooting and debugging to optimize performance.
            </Journey.Description>
            <Journey.Description>
              Writing clean, scalable & efficient code with responsive
              interfaces
            </Journey.Description>
            <Journey.Description>
              At the end, provide a performance evaluation with 3 actionable
              growth recommendations, aiming to help the intern successfully
              achieve 100% performance throughout the internship period.
            </Journey.Description>
            <Journey.Description>
              Develop and maintain responsive web applications using modern
              front-end frameworks.
            </Journey.Description>
            <Journey.Description>
              Debug and troubleshoot issues in web environments.
            </Journey.Description>
            <Journey.Description>
              Stay updated with emerging front-end technologies and best
              practices.
            </Journey.Description>
          </Journey.Item>
        </>
      </Journey>
    </Section>
  );
};
