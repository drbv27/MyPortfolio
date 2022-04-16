import Experience from "../components/Experiences";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Skill from "../components/skill";
import { skills,experiences } from "../profile";
import { projects } from "../projects";

const Index = () => {
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
                <button type="button" class="btn btn-info mx-1">Resp. Web Dev</button>
                <button type="button" class="btn btn-success mx-1">Front End</button>
                <button type="button" class="btn btn-warning mx-1">Full Stack</button>
                <button type="button" class="btn btn-danger mx-1">Clear X</button>
                <hr/>
                <div className="row">
                    {
                        projects.map(({
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
        </Layout>
     );
}
 
export default Index;