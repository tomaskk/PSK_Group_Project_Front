import React, { Component } from 'react';

const HelpPage = () => {
  return (
    <main className="main">
      <div class="admin__header">
        <h1 className="heading1" style={{ float: 'left' }}>
          Project info
        </h1>
      </div>

      <div className="content content--bottom-square content__scrollable" style={{height: "100%"}}>
        <h5  style={{margin: "32px"}}>Help page of the PSK Group project.</h5>

        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Project title: </b> Travel Agent </p>
        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Project's purpose: </b> to help employees of DevBridge 
        plan and organize their travels/voyages much easier, faster, and have everything in one place. </p>
        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Demo launch date: </b> 2019-06-03 </p>

        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Team name: </b> PEEKT </p>
        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Team members: </b> </p>

        <ul>
          <p style={{marginLeft: "20px", marginBottom: "10px"}}> Software engineering - 3rd course, 5th group: </p>
          <li style={{marginLeft: "32px", marginBottom: "10px"}}> Tomas Kazlauskas      </li>
          <li style={{marginLeft: "32px", marginBottom: "10px"}}> Paulius Grigaliūnas   </li>
          <li style={{marginLeft: "32px", marginBottom: "10px"}}> Karolis Staskevičius  </li>
          <li style={{marginLeft: "32px", marginBottom: "10px"}}> Emilija Lamanauskaitė </li>
          <li style={{marginLeft: "32px", marginBottom: "10px"}}> Elena Reivytytė       </li>
        </ul>

        <p style={{marginLeft: "20px", marginBottom: "10px"}}> <b> Instructions of usage: </b></p>
        <p style={{marginLeft: "32px", marginBottom: "10px"}}> To be continued... </p>

      </div>
    </main>
  );
};

export default HelpPage;
