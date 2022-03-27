import Layout from "../components/Layout";

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
                        </div>
                    </div>

                </div>
                <div className="col-md-8">
                <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Index;