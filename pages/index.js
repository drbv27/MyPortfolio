import Experience from "../components/Experiences";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Skill from "../components/skill";
import { skills,experiences } from "../profile";
import { projectsrwd } from "../projectsrwd";
import { projectsfe } from "../projectsfe";
import React, { useState } from 'react';

const Index = () => {
    const initial = [];
    const [proyectos,setProyectos] = useState(initial)
    return ( 
        <Layout>
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-primary">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/fotodoc4.png" alt="drbv"className="img-fluid rounded"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Diego Bonilla</h1>
                                <h3>FrontEnd Developer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, saepe reprehenderit accusamus ea beatae esse aliquam assumenda, maiores mollitia nemo atque iste officia eaque, natus minus ipsum eos alias voluptatum.</p>
                                <a href="/hireme">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="row mt-3 text-primary">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {
                                skills.map(({skill,percentage,icon},i)=>(
                                    <Skill skill={skill} percentage={percentage} icon={icon} key={i}/>
                                 ))
                            }
                        </div>
                    </div>

                </div>
                <div className="col-md-8">
                <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                            {
                                experiences.map(({company,labour,time,Functions},j)=>(
                                    <Experience company={company} labour={labour} time={time} Functions={Functions} key2={j}/>
                                 ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-md-12 text-center bg-light mt-3 text-primary pt-2 mb-3 pb-3">
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
            <div className="container col-md-12 bg-light mt-3 text-primary pt-2 mb-3 pb-3">
                <h2>Contact me:</h2>
                <h3>Diego Bonilla</h3>
                <div className="row">
                    <p>Phone: +57 3192181322</p>
                    <p>Email: drbv27@gmail.com</p>
                </div>

            </div>
        </Layout>
     );
}
 
export default Index;