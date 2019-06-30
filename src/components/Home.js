import React from 'react';
import './Home.css';

function Home(props) {
  return <>
    <header>
      <h1 className='pageQuote'>Less is often more.</h1>
    </header>

    <h2 className='projectHeader'>Projects</h2>
    <section className='projectShowcase'>
      <div className='projectThumbnail'>
        <h3 className='projectName'>Project Name</h3>
        <section className='linkSection'>
          <p className='projectLink'>Github</p>
          <p className='projectLink'>Demo</p>
        </section>
      </div>

      <div className='projectThumbnail'>
        <h3 className='projectName'>Project Name</h3>
        <section className='linkSection'>
          <p className='projectLink'>Github</p>
          <p className='projectLink'>Demo</p>
        </section>
      </div>
    </section>
  </>
}

export default Home;