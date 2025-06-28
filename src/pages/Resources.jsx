import React from 'react';
import './Resources.css';
import exampleImg from '../assets/slideshow_pics/react.svg';

function Resources(){
    return (
        <div className="resources-container">
            <h1>Resources Page</h1>
            <p>This page provides helpful information on how to recycle and contribute to a cleaner, more sustainable community.</p>
            {/* recylying tabs */}
            <div className="card-grid">
                {/* Paper/CardBoard */}
                <div className='recylying-row'>
                <div className="recylying-card">
                    <h3 className='card-category'>Paper/CardBoard</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Recyclable: Newspapers, magazines, office paper, cardboard and paper bags 
                    </p>

                </div>
                {/* Plastics */}
                <div className="recylying-card">
                    <h3 className='card-category'>Plastics</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Recyclable: Plastic bottles and jugs, some food containers 
                    </p>

                </div>
                </div>
                {/* Metals */}
                <div className='recylying-row'>
                <div className="recylying-card">
                    <h3 className='card-category'>Metals</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Recyclable metals: Aluminum cans, steel cans, copper pipes, brass fixtures, household appliances
                    </p>

                </div>
                {/* Glass */}
                <div className="recylying-card">
                    <h3 className='card-category'>Glass</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Recyclable: Glass bottles and jars
                    </p>
                </div>
                </div>

                {/*  */}
                <div className='recylying-row'>
                <div className="recylying-card">
                    <h3 className='card-category'>Avoid trying to recycle the following items:</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Plastic bags, styrofoam, greasy or food-stained materials, wet paper, disposable coffee cups
                    </p>

                </div>
                {/*  */}
                <div className="recylying-card">
                    <h3 className='card-category'>Special Item Recycling</h3>
                    <img 
                    src={exampleImg}
                    style={{ width: '100%' }} 
                    />
                    <p className="card-description">
                    Certain materials require special disposal due to health and environmental risks. These should not go in regular trash or recycling bins. 
                    These items must be taken to designated recycling or hazardous waste collection sites.
                    </p>
                    <p className='card-descripion'>
                        Hazardous Materials:
Batteries
Electronics
Paint
Certain light bulbs
</p>
<p className='card-description'>
Other Items:
Tires
Medical waste
Construction materials


                    </p>

                </div>
                </div>
            </div>
                            <div className='Quiz'>
                    <p>Unsure what on the Materials you can recycle Check out our Quiz ! </p>
                </div>
                <div className='Youtube-link'></div>
                    <iframe 
                    width="560"     
                    height="315" 
                    src="https://www.youtube.com/embed/eSeXWk3UTWQ?si=s_e4QHQL2aS5nIxf" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                    </iframe>

                 <div className='bootom-row-link'>
            

                {/*  */}
                    <h3 className='sub-title'>Help the Community</h3>
                        <h4 className='sub-title'>Get involved through NYC-based volunteering opportunities:</h4>
                        <a
                        href="https://bigreuse.org/blogs/news/check-out-these-environmental-volunteering-opportunities?srsltid=AfmBOooe3RSQk25OcIryXi5winEVacP9IlU4CiY_DQX1OFNZyYf47gvT" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        click here </a>
                         <a
                        href="https://earthmatter.org/participate/volunteer-opportunities/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        click here</a>
                {/*  */}
                <h3 className='sub-title'>Help the Community</h3>
                        <h4 className='sub-title'>Learn about NYC-specific recycling rules and guidelines:</h4>
                                                <a
                        href="https://portal.311.nyc.gov/article/?kanumber=KA-02013" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        click here </a>
                         <a
                        href="https://hudsonriverpark.org/recycling-101-in-nyc/?gad_source=1&gad_campaignid=9611680545&gbraid=0AAAAACw680cUNI-tizYf5o4xzRqui8I-q&gclid=Cj0KCQjwgvnCBhCqARIsADBLZoJP5G8nkb9LFtxUIk1Nj_70fQjjhxN9jqSZIZGgZ3ZgoMWyaDf_gjgaArhjEALw_wcB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        click here </a>
                        <a
                        href="https://www.nyc.gov/site/dsny/collection/residents/recycling.page" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        click here </a>

                </div>
        </div>
    );
}
export default Resources;

