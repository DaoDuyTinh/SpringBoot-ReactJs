import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";

const options = [
  { value: "islamabad", label: "Islamabad" },
  { value: "lahore", label: "Lahore" },
  { value: "karachi", label: "Karachi" },
];

class ReactSelectExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      normalSelectOption: null,
      news:[]
    };
  }

  fetchData = (inputvalue,callback) => {
    setTimeout(() => {
      fetch(
        "http://localhost:8080/news", 

        {
          method: "GET",
        }
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
                this.setState({selectedOption:data})
              data.forEach((element) => {
                tempArray.push({
                  label: `${element.title}`,
                  value: element.id,
                shortDescription:`${element.shortDescription}`,
                 description:`${element.description}`,
                status: true,
                image: `${element.image}`
                });
              });
            } else {
              tempArray.push({
                label: `${data.title}`,
                value: data.id,
              });
            }
          }
          callback(tempArray);
        })
        .catch((error) => {
          console.log(error, "catch the hoop");
        });
    }, 1000);
  };

  onSearchChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        selectedOption,
      });
      selectedOption.forEach((se)=>
      {this.state.news.push({
        id: se.id,
      shortDescription:`${se.shortDescription}`,
       description:`${se.description}`,
      status: true,
      title: `${se.title}`,
      image: `${se.image}`
      });
    });
    console.log(JSON.stringify(this.state.news));
    }
  };
  handleChange = (normalSelectOption) => {
    this.setState({ normalSelectOption });
  };
  render() {
    return (
      <div style={{ marginLeft: "40%", width: "200px" }}>
        <div>
          <p>Local array</p>
          {this.state.normalSelectOption &&
            `Selected Value : ${this.state.normalSelectOption.value}`}

          <Select
            value={this.state.normalSelectOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>

        <div>
          <p>Remote data</p>
          <AsyncSelect
            value={this.state.selectedOption}
            isMulti
            loadOptions={this.fetchData}
            onChange={(e) => {
              this.onSearchChange(e);
            }}
            defaultOptions={true}
          />
        </div>
      </div>
    );
  }
}

export default ReactSelectExample;

