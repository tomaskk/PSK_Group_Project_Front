import React from 'react';

class HelpPage extends React.Component {

  constructor(props) {
    super(props);

    if(props.currentUser == 'empty'){
      props.history.push('/login');
    }
  }

    render() {
      return (
        <main className="main">
          <div class="admin__header">
            <h1 className="heading1" style={{ float: 'left' }}>
              Project info
            </h1>
          </div>

          <div className="content content--bottom-square content__scrollable" style={{height: "100%"}}>
            <h4 style={{margin: "32px"}}>Help page of the PSK Group project.</h4> <hr/>

            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> <b> Project title: </b> Travel Agent </p>
            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> <b> Project's purpose: </b> to help employees of DevBridge 
            plan and organize their travels/voyages much easier, faster, and have everything in one place. </p>
            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> <b> Demo launch date: </b> 2019-06-03 </p>

            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> <b> Team name: </b> PEEKT </p>
            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> <b> Team members: </b> </p>

            <ul>
              <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "14pt" }}> Software engineering - 3rd course, 5th group: </p>
              <li style={{marginLeft: "32px", marginBottom: "10px", fontSize: "14pt" }}> Tomas Kazlauskas      </li>
              <li style={{marginLeft: "32px", marginBottom: "10px", fontSize: "14pt" }}> Paulius Grigaliūnas   </li>
              <li style={{marginLeft: "32px", marginBottom: "10px", fontSize: "14pt" }}> Karolis Staskevičius  </li>
              <li style={{marginLeft: "32px", marginBottom: "10px", fontSize: "14pt" }}> Emilija Lamanauskaitė </li>
              <li style={{marginLeft: "32px", marginBottom: "10px", fontSize: "14pt" }}> Elena Reivytytė       </li>
            </ul>

            <p style={{marginLeft: "20px", marginBottom: "10px", fontSize: "13pt" }}> <b> Instructions of usage: </b></p>
            <p style={{marginLeft: "32px", marginBottom: "10px", fontSize: "12pt" }}> To be continued... </p>

          </div>
        </main>
      );
    };
  }

export default HelpPage;
