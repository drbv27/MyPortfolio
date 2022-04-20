import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header