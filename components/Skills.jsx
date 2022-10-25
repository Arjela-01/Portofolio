import React from "react";
import SkillsItem from "./SkillsItem";

export default function () {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        
        <SkillsItem title='HTML' src='/../public/assets/skills/html.png'/>
        <SkillsItem title='CSS' src='/../public/assets/skills/css.png'/>
        <SkillsItem title='FIREBASE' src='/../public/assets/skills/firebase.png'/>
        <SkillsItem title='GITHUB' src='/../public/assets/skills/github1.png'/>
        <SkillsItem title='JAVASCRIPT' src='/../public/assets/skills/javascript.png'/>
        <SkillsItem title='NODE' src='/../public/assets/skills/node.png'/>
        <SkillsItem title='NEXT-JS' src='/../public/assets/skills/nextjs.png'/>
        <SkillsItem title='SHOPIFY' src='/../public/assets/skills/shopify.png'/>   
       
      </div>
    </div>
</div>
  );
}
