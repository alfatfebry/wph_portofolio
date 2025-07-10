import React from 'react';
import { Section } from '../Section';
import Styles from './CoreSkill.module.scss';
import { CoreSkill } from './CoreSkill';
import AnimationGroup from './Animation/AnimationGroup/AnimationGroup';
import { skills } from '@/constant/skills';
import SkillGroup from './Skill/SkillGroup/SkillGroup';

export default function CoreSkillSection() {
  return (
    <Section
      className={Styles.CoreSkillHeader}
      id='CoreSkill'
      title='My Core Skill'
      subtitle='An overview of the key technologies and frameworks I specialize in'
    >
      <CoreSkill>
        <CoreSkill.AnimationGroup>
          <AnimationGroup.Item></AnimationGroup.Item>
        </CoreSkill.AnimationGroup>

        <CoreSkill.SkillGroup>
          {skills.map((skills) => (
            <SkillGroup.Item
              key={skills.title}
              title={skills.title}
              proficiency={skills.proficiency}
            ></SkillGroup.Item>
          ))}
        </CoreSkill.SkillGroup>
      </CoreSkill>
    </Section>
  );
}
