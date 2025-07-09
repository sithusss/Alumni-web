import React from 'react';

const UnderDevelopment = () => (
  <>
    <style>
      {`
        .under-dev-icon {
          font-size: 3rem;
          color: #ffc107;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .under-dev-card {
          border: 2px dashed #ffc107;
          background: #fffbea;
        }
      `}
    </style>
    <section className="intro-section sec-scholarships">
      <div className="container">
        <h2 className="mb-5 customHeading topBar">Page Under Development</h2>
        <div className="card card-body text-center under-dev-card">
          <span className="under-dev-icon">🚧</span>
          <h4 className="mb-3">This page is currently under development</h4>
          <p className="lead">
            We’re working hard to bring you this feature. Please check back soon!
          </p>
        </div>
      </div>
    </section>
  </>
);

export default UnderDevelopment;