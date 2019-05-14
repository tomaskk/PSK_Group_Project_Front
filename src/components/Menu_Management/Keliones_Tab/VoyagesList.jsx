import React from "react";
import ColTable from './VoyagesListComponents/ColTable.jsx';
import UserTable from "./VoyagesListComponents/UserTable.jsx";
import SvgDownload from "./VoyagesListComponents/images/SvgDownload.jsx"
import { CSVLink } from "react-csv";
import Head from "./VoyagesListComponents/Head.jsx"
import { Route } from "react-router-dom";
import storage from './VoyagesListComponents/LocalStorage.js'

export default class VoyagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      nameOrder: 'asc',
      lastActiveOrder: 'asc',
      orderBy: '',
      searchString:"",
      classes: props.classes,
      typed:'',
      data :[]
    };

    this.tableElement = React.createRef()
    this.getSorting.bind(this)
    this.stableSort.bind(this)
    this.desc.bind(this)
    this.sortByLastActive = this.sortByLastActive.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.onNameSearch = this.onNameSearch.bind(this)
    this.onDeleteUser= this.onDeleteUser.bind(this)
    this.sortList= this.sortList.bind(this)
  }

  componentWillMount() {
    this.state.users =  [...JSON.parse(window.localStorage.getItem("usersWhoLeftData")).users];
    this.state.data = [...JSON.parse(window.localStorage.getItem("usersWhoLeftData")).users];
  }


  // Sorting functions--------------------------
  desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
  }

  stableSort (array, cmp)  {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  
  sortList(order, orderBy){
    let newUsers = this.stableSort(this.state.users, this.getSorting(order, orderBy))
    this.setState({users :newUsers}) 
    this.tableElement.current.changeUsers(newUsers)
  }

  // Events-------------------------------------

  onDeleteUser(id){
    let newUsers = Array.from(this.state.users)
        const ind = newUsers.findIndex(i => i.id === id)
        newUsers.splice(ind, 1)
        
        if(newUsers===null)
          newUsers = []
        this.setState({users :newUsers, data: newUsers})
        this.tableElement.current.changeUsers(newUsers)
  }
  
  sortByName (){
    let order = 'desc';
    if (this.state.nameOrder === 'desc') {
      order = 'asc';
    }
    this.setState({ nameOrder : order});
    this.sortList(order, 'name')
  }

  sortByLastActive (){
    let order = 'desc';
    if (this.state.lastActiveOrder === 'desc') {
      order = 'asc';
    }
   this.setState({ lastActiveOrder : order});
   this.sortList(order, 'lastActive')
  }

  onNameSearch(typed){
    let libraries = Array.from(this.state.data)
    let searchString = typed.trim().toLowerCase();
       if (searchString.length > 0) {
       libraries = libraries.filter(function(i) {
         return i.name.toLowerCase().match( searchString );
       });
     }
     this.setState({users :libraries})
     this.tableElement.current.changeUsers(libraries)
  }

  render() {
    return (
      <main className="main">
        <div class="admin__header">
          <h1 className="heading1" style={{ float: "left" }}>
            Management
          </h1>
          <a href="" class="button button--primary button--spaced admin__action">
          <CSVLink style={CSVStyle} data={this.state.users} filename="AllVoyages.csv">
            <SvgDownload/>
              Download as CSV
            </CSVLink>
            </a>
        </div>
        <div className="content content--bottom-square">
          <ColTable/>
          <Head sortByName={this.sortByName} 
          sortByLastActive={this.sortByLastActive}
          onNameSearch={this.onNameSearch}/>
          <Route
            to="host/admin/lost"
          component={() => <UserTable users = {this.state.users} ref={this.tableElement} onDeleteClick={this.onDeleteUser}/>}
        />
        </div>
      </main>
    );
  }
}

const CSVStyle = {
  color: "white",
  textDecoration: "none"
};