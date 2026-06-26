import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Vikram Ratan</h1>
                    <div className="footer-keys">
                        <p>BI Analyst</p><p>Data & AI Analytics</p><p>Stakeholder Analytics</p>
                    </div>

                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="" alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2026 Vikram Ratan. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <a href="https://github.com/Vikram-ratan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:Vikramratan09@gmail.com">Email</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
