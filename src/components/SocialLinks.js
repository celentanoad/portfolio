import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Github</h4>
                <hr className="my-4" />
                <div className="small text-black-50"><a href={config.github}><img src="https://i.imgur.com/kO7lRkL.png" alt="" width="25px"></img></a></div>
              </div>
            </div>
          </div> 

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">LinkedIn</h4>
                <hr className="my-4" />
                <div className="small text-black-50"><a href={config.linkedin}><img src="https://i.imgur.com/DZfppKt.png" alt="" width="25px"></img>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
