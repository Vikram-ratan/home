import './Hero.css';
import profile_img from '../../assets/vikram_profile_optimized.webp';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Helmet } from "react-helmet";

const Hero = () => {
    return (
        <div id='home' className="hero">
            <Helmet><meta name="viewport" content="width=device-width, initial-scale=1.0" /></Helmet>
            <div className="divider">
                <div className="hero-information">
                    <h1>Vikram Ratan</h1>
                    <p className="hero-tagline">Data & AI Analytics Consultant turning business problems into trusted data insights.</p>
                    <div className="hero-action">
                        <AnchorLink className="anchor-link hero-connect" offset={50} href='#contact'>Let&apos;s Connect</AnchorLink>
                        <div className="hero-resume">
                            <a href="/home/Vikram_Ratan_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
                        </div>
                    </div>
                </div>

                {/* <div className="hero-scroll" href="#container">
                    <p>Scroll for more</p>
                    <img src={downarrow_img} alt="" />
                </div> */}
            </div>

            <div className="hero-img">
                <img src={profile_img} alt="Vikram Ratan profile portrait"></img>
            </div>

        </div >
    )
}

export default Hero
