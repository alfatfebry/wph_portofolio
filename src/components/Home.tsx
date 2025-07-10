/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { AchievementSection } from './Achievement/AchievementSection';
import { CareerJourneySection } from './Journey';
import CoreSkillSection from './CoreSkill/CoreSkillSection';
import { ComparisonSection } from './Comparison';
import { ProjectSection } from './Projects/ProjectSection';
import { Testimoni } from './Testimoni/Testimoni';
import { FAQItem } from './FAQ/FAQItem';

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AchievementSection />
      <CareerJourneySection />
      <CoreSkillSection />
      <ComparisonSection />
      <ProjectSection />
      <Testimoni />
      <FAQItem />
    </>
  );
};
