import React, { Component } from "react";
import "../css/LocationPage.css";

import Nav from "./Nav";
import Gallery from "./Gallery";
import Tag from "./Tag";
import Host from "./Host";
import Rate from "./Rate";
import Dropdown from "./Dropdown";

class LocationPage extends Component {
  render() {
    const { locationData } = this.props;
    const {
      title,
      location,
      pictures,
      host,
      equipments,
      tags,
      rating,
      description,
    } = locationData;

    return (
      <div className="location-page">
        <Nav />
        <Gallery images={pictures} />

        <main className="main-location">
          <header className="location-header">
            <div>
              <h2>{title}</h2>
              <p>{location}</p>
              {tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </div>
            <div className="location-header-host">
              <Host name={host.name} img={host.picture} />
              <Rate fill={rating} />
            </div>
          </header>

          <section className="location-details">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Equipements" content={equipments} />
          </section>
        </main>
      </div>
    );
  }
}

export default LocationPage;
