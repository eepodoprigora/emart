import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <div className='position-relative'>
            <img src="/assets/bg-about.jpg" className="card-img position-absolute h-100 w-100 " alt="Background" style={{zIndex:-1}} />
            <div className="container py-3 my-3">
                <div className="row">
                    <div className="col-md-6 " style={{color: 'white'}}>
                        <h1>About us</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Porttitor massa id neque aliquam. Orci porta non pulvinar
                            neque laoreet suspendisse interdum. Felis donec et odio pellentesque. Fringilla phasellus
                            faucibus scelerisque eleifend donec pretium. Purus in mollis nunc sed id semper risus in.
                            Pulvinar pellentesque habitant morbi tristique. Turpis tincidunt id aliquet risus feugiat.
                            Massa sed elementum tempus egestas sed sed. Sit amet justo donec enim. Habitant morbi
                            tristique senectus et netus et malesuada fames ac. Turpis tincidunt id aliquet risus feugiat
                            in ante metus. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Amet nisl purus in
                            mollis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
                            Vel eros donec ac odio tempor orci dapibus ultrices in. Vitae suscipit tellus mauris a diam
                            maecenas.
                        </p>
                        <NavLink style={{color: '#1f0738'}} className='btn btn-outline-light mb-5 fw-bolder' to={'/contact'}>Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About