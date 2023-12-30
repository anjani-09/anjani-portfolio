import React from 'react';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './index.scss'
const TagCloudComponent= () => (
 <div id = "TagCloud" style={{ color: 'white', fontSize: 'x-large'}}>
    <TagCloud
    options={(w) => ({
      radius: Math.min(800, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: 'fast',
    })}
    onClick={(tag, ev) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
      'TypeScript',
      'JavaScript',
      'React',
      'Vue.js',
      'Tailwind CSS',
      'Next.js',
      'Python',
      'C#',
      'ASP .NET',
      'Android',
      'Java',
      'SQL',
      'AWS',
      'Firebase',
      'Git',
      'Docker',
      'Bash',
      'HTML',
      'CSS',
      'GraphQL',
      'MongoDB',
      'VS Code',
      'Selenium',
      'Android Studio',
      'Jest',
      'Cypress',
      'Kotlin',
      'MySQL',
      'MS SQL Server'
    ]}
  </TagCloud>
  </div>
);

export default TagCloudComponent;
