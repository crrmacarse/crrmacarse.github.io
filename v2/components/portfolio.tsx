import orderBy from 'lodash/orderBy';
import Card from './card';
import db from '@v2/firebase/db';
import { useEffect, useState } from 'react';
import { PROJECTS_DATA } from '@v2/constants/projects';
import Tags, { tagType } from './tags';
import { isEmpty } from 'lodash';

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  const selectedTags = tags.filter((t: tagType) => t.isSelected).map((t) => t.title);
  const filteredProjects = isEmpty(selectedTags) ? projects : projects.filter((p) => p.tags.some((t: string) => selectedTags.includes(t)))

  const handleTagClick = (tag: tagType) => {
    const updatedTags = tags.map((t) => {
      const updatedTag = t.title === tag.title && { isSelected: !t.isSelected };

      return {
        ...t,
        ...updatedTag,
      }
    })

    setTags(updatedTags);
  }

  const handleTagReset = () => {
    const updatedTags = tags.map((t) => ({ ...t, isSelected: false }));

    setTags(updatedTags);
  }

  useEffect(() => {
    db.ref('/projects').once('value').then((snapshot) => {
      const data = [...PROJECTS_DATA, ...snapshot.val()];
      const dataTags = data.map((d) => d.tags).reduce((acc, val) => acc.concat(val), []);
      const dataTagsFinal = [...new Set(dataTags)].map((v) => { return { title: v, isSelected: false }});

      setTags(dataTagsFinal)
      setProjects(data);
    });
  }, [])

  return (
    <div className="portfolio-section min-h-screen pt-28 px-3">
      <Tags tags={tags} onSelect={(t) => handleTagClick(t)} onReset={handleTagReset}/>
      <ul className="sm:w-11/12 mx-auto sm:grid-cols-3 grid gap-5">
        {orderBy(filteredProjects, 'priority').map((project: any, key: number) => (
          <li key={key} className="lg:mx-auto">
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
