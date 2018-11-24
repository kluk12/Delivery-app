import React, { Component, Fragment } from "react";

import Product_list from "./components/produkt_list/plist";
import { miasta, type } from "./components/data/stone";

import Indexform from "./components/form/indexform";
import { Provider } from "./components/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import _ from "lodash";
import rightpanel from "./components/produkt_list/rightpanel";
import Fpage from "./components/Fpage/Fpage";

class App extends Component {
  state = {
    rp: [], //{ key: 0, label: "", ile: 0, opis: "", active: true }
    show: true,
    datenow: "",

    Imie: "",
    Nazwisko: "",
    Pseudonim: "",
    Miasto: "",
    Nrmieszkania: "",
    Email: "",

    type: "",
    Tytuł: "",
    Radios: "",
    Opis: "",
    DateStart: "",
    DateEnd: "",
    dense: false,

    // chipData: [],
    tabs: null,
    value: 0,

    name: null,
    caltegory: null
  };
  componentDidMount = () => {
    // this.setarr();
  };

  setarr = () => {
    this.setState(state => ({ Miasto: miasta, type: type }));
  };
  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleChangeSelectmiasto = event => {
    this.setState({ Miasto: event.target.value });
  };
  handleChangeRadios = event => {
    this.setState({ Radios: event.target.value });
  };
  handleChangeDateEnd = event => {
    // console.log(event);
    this.setState({ DateStart: event.target.value });
  };
  handleChangeDateStart = event => {
    // console.log(event);
    this.setState({ DateEnd: event.target.value });
  };
  handleChangetabs = (event, value) => {
    this.setState({ value });
  };

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };
  handleAdd = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  handleChangeTextform = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleChangeSelecttype = event => {
    this.setState({ type: event.target.value });
  };

  handlecheckm = event => {
    this.setState({ dense: event.target.checked });
  };
  handlechecko = event => {
    this.setState({ secondary: event.target.checked });
  };
  handleile = i => event => {
    console.log(i);
    this.setState(state => {
      const rp = [...state.rp];
      rp[i].ile = event.target.value;
      return { rp };
    });
  };
  handleopis = i => event => {
    event.persist();
    console.log(i, event.target.value);
    this.setState(state => {
      const rp = [...state.rp];
      rp[i].opis = event.target.value;

      return { rp };
    });
  };
  // add element to r panel
  addProdukt = (nazwa, id) => {
    this.setState(state => {
      const rp = [...state.rp];

      if (
        rp.find(r => {
          return r.key === id;
        }) === undefined
      ) {
        rp.push({ key: id, label: nazwa, ile: 1, opis: " ", active: true });

        return { rp };
      } else {
        return;
      }
    });
  };
  removeProduct = i => {
    this.setState(state => {
      const rp = [...state.rp];

      rp.splice(i, 1);

      return { rp };
    });
  };
  getcontext = () => ({
    state: { ...this.state },
    handleile: this.handleile,
    handleopis: this.handleopis,
    handleClick: this.handleClick,
    handleChange: this.handleChange,
    handleChangeSelectmiasto: this.handleChangeSelectmiasto,
    handleChangeRadios: this.handleChangeRadios,
    handleChangeDateEnd: this.handleChangeDateEnd,
    handleChangeDateStart: this.handleChangeDateStart,
    handleChangetabs: this.handleChangetabs,
    handleDelete: this.handleDelete,
    handleAdd: this.handleAdd,
    handleChangeTextform: this.handleChangeTextform,
    handleChangeSelecttype: this.handleChangeSelecttype,
    addProdukt: this.addProdukt,
    handlecheckm: this.handlecheckm,
    handlechecko: this.handlechecko,
    removeProduct: this.removeProduct
  });
  render() {
    return (
      <Provider value={this.getcontext()}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Indexform} />

              <Route path="/product" component={Product_list} />
              <Route path="/Final_form" component={Fpage} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
