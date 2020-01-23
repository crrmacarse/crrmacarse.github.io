import React from 'react';

const Footer = () => <div className="footer-section ui vertical segment">
    <div className="ui container">
        <div className="ui inverted stackable divided grid">
            <div className="row"><div className="three wide column">
                <h4 className="ui inverted header">Lorem</h4>
                <div role="list" className="ui inverted link list">
                    <a role="listitem" className="item">Ipsum</a>
                    <a role="listitem" className="item">Dolor Sit</a>
                    <a role="listitem" className="item">Libero Quis</a>
                </div>
            </div>
                <div className="three wide column"><h4 className="ui inverted header">LINKS</h4>
                    <div role="list" className="ui inverted link list">
                        <a role="listitem" className="item">Github</a>
                        <a role="listitem" className="item">LinkedIn</a>
                        <a role="listitem" className="item">Twitter</a>
                    </div></div>
                <div className="seven wide column">
                    <h4 className="ui inverted header">Lorem Ipsum Dolor</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ac massa id neque ultricies ornare id vel libero.
                        Nam molestie, libero quis maximus consequat, lectus diam
                        molestie ligula,
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

export default Footer;
