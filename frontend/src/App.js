import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

    // const crudItems = [
    //   {
    //     id: 1,
    //     storeName: "Market One",
    //     desc: "Buy items",
    //     status: true
    //   },
    //   {
    //     id: 2,
    //     storeName: "Market Two",
    //     desc: "Buy Items",
    //     status: false
    //   },
    //   {
    //     id: 3,
    //     storeName: "Market Three",
    //     desc: "buy items",
    //     status: true
    //   },
    //   {
    //     id: 4,
    //     storeName: "Market Four",
    //     desc: "buy",
    //     status: false
    //   }
    // ];

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          modal: false,
          viewCompleted: false,
          activeItem: {
            storeName: "",
            desc: "",
            status: false
          },
          crudList: []
        };
      }

      componentDidMount() {
        this.refreshList();
      }

      refreshList = () => {
        axios
          .get("http://localhost:8000/api/cruds/")
          .then(res => this.setState ({ crudList: res.data }))
          .catch(err => console.log(err));
      }
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      }

        handleSubmit = item => {
          this.toggle();
          alert("save" + JSON.stringify(item));
        }

      handleDelete = item => {
        this.toggle();
        alert("delete" + JSON.stringify(item));
      }

        createItem = () => {
          const item = { storeName: "", desc:"", status:false };
          this.setState({ activeItem: item, modal: !this.state.modal });
        }

        editItem = item => {
          this.setState({ activeItem: item, modal: !this.state.modal });
        }
      displayCompleted = stat => {
        if (stat) {
          return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
      };
      renderTabList = () => {
        return (
          <div className="my-5 tab-list">
            <span
              onClick={() => this.displayCompleted(true)}
              className={this.state.viewCompleted ? "active" : ""}
            >
              Inn
            </span>
            <span
              onClick={() => this.displayCompleted(false)}
              className={this.state.viewCompleted ? "" : "active"}
            >
              oUT
            </span>
          </div>
        );
      };
      renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.crudList.filter(
          item => item.status == viewCompleted
        );
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2 ${
                this.state.viewCompleted ? "completed-status" : ""
              }`}
              title={item.desc}
            >
              {item.storeName}
            </span>
            <span>
              <button className="btn btn-secondary mr-2" onClick={() => this.editItem(item)}> Edit </button>
              <button className="btn btn-danger" onClick={() => this.handleDelete(item)}>Delete </button>
            </span>
          </li>
        ));
      };
      render() {
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Crud app</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button className="btn btn-primary" onClick={this.toggle}>Add Store</button>
                  </div>
                  {this.renderTabList()}
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
                // isOpen={this.state.modal}
              />
            )
          : null
          }
          </main>
        );
      }
    }
    export default App;