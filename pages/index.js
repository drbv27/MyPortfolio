import Experience from "../components/Experiences";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Skill from "../components/skill";
import { skills,experiences } from "../profile";
import { projectsrwd } from "../projectsrwd";
import { projectsfe } from "../projectsfe";
import React, { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";
import ExperienceCard from "../components/ExperienceCard";

const Index = () => {
    const initial = [];
    const [proyectos,setProyectos] = useState(initial)
    return ( 
        <Layout>
            <Header/>
            <div className="row mt-3 text-primary">
                <SkillsCard skills={skills} />
                <ExperienceCard experiences={experiences}/>
            </div>
            <div className="container col-md-12 text-center bg-light mt-3 text-primary pt-2 mb-3 pb-3 rounded">
                <h2 className="mb-2">My Projects</h2>
                <button type="button" className="btn btn-danger mx-1" onClick={()=>setProyectos(projectsrwd)}>Resp. Web Dev</button>
                <button type="button" className="btn btn-danger mx-1" onClick={()=>setProyectos(projectsfe)}>Front End</button>
                <button type="button" className="btn btn-danger mx-1">Full Stack</button>
                
                {proyectos.length>0 && 
                <button type="button" className="btn btn-outline-danger mx-1" onClick={()=>setProyectos(initial)}><b>Clear X</b></button>
                
                }
                
                <hr/>
                <div className="row">
                    {
                        proyectos.map(({
                            pageImg,
                            pageTitle,
                            pageType,
                            pageDesc,
                            pageIcons,
                            pageUrl,
                            codeUrl,
                        },k)=>(
                            <Project
                            pageImg={pageImg}
                            pageTitle={pageTitle}
                            pageType={pageType}
                            pageDesc={pageDesc}
                            pageIcons={pageIcons}
                            pageUrl={pageUrl}
                            codeUrl={codeUrl}
                            key3={k}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </Layout>
     );
}
 
export default Index;