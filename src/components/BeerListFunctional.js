import React from 'react';

class BeerList extends React.Component {
  state = {}

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    xhr.open("GET", "https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=766710", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          this.setState({ json_obj });
        } else {
          console.error(xhr.statusText);
        }
      }
      let beerList = json_obj.taplistDetails.beverageList;
      beerList.map((beer) => {
        console.log(beer.beverageName);
        console.log(beer.description);
      });
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default BeerList;