import React, { useState } from 'react'
import ProjectList from './ProjectList';
import { imagesData } from '../data/imagesData';
import Toolbar from './Toolbar';

function Portfolio(props) {

  // установка состояния по клику на кнопку фильтра
  const [state, setState] = useState(imagesData);

  const onSelectFilter = (filter) => {
    const imagesFiltered = imagesData.filter((item) => {
      if (filter === "All") return item
      else return item.category === filter;
    });
    setState(imagesFiltered);
  }


  return (
    <div>
      <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} onSelectFilter={onSelectFilter}/> 
      <ProjectList images={state}/>
    </div>
  )
}

export default Portfolio

