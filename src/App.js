import React from "react";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
                   <h1 style={{color: '#31CDCD', textAlign:'left', padding:'20px' }} >All Orders {items.length}</h1><hr /><br />
 
 <br /> <input style={{display:'flex',marginLeft:'20px',height:'50px',width:'500px', fontSize:'20px', padding:'10px'}} 
           type="search" placeholder='Search..'  searching={false}
           />

        <table
          id="myTable"
          style={{ width: "100%", textAlign: "left", padding: "20px" }}
          cellPadding="20"
        >
          <thead style={{ backgroundColor: "#F2F8F8" }}>
            <tr>
              <th style={{ padding: "20px " }}>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th>DATE ORDER</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((curElem, ind) => {
              return (
                <tr key={curElem.order_id}>
                  <td>{curElem.order_id}</td>
                  <td>{curElem.customer}</td>
                  <td>
                    <span style={{ fontWeight: "bold" }}>
                      {curElem.country}
                    </span>
                    <br />
                    {curElem.address}
                  </td>
                  <td>
                    <span style={{ fontWeight: "bold" }}>
                      {curElem.product_title}
                    </span>
                    <br />
                    {curElem.product_description}
                  </td>
                  <td>{curElem.date}</td>

                  <td style={{ fontWeight: "bold" }}>
                    {curElem.status === "Delivered" && (
                      <span style={{ color: "blue" }}>{curElem.status}</span>
                    )}
                    {curElem.status === "Completed" && (
                      <span style={{ color: "green" }}>{curElem.status}</span>
                    )}
                    {curElem.status === "Prepared" && (
                      <span style={{ color: "orange" }}>{curElem.status}</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
