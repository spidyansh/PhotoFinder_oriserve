import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Photofinder() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${photo}&client_id=Z8kn0VnNptUEh8irBziq6FYKUtkbi4pGoCnX7T5WqVE`
      )
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      });
  };

  return (
    <>
      <div className="container text-center my-5">
        <div className="header-1">
          <h1 className="heading">Photo Finder by Anshul Aggarwal</h1>
        </div>
        <input
          type="text"
          className="form-control"
          value={photo}
          placeholder="Type here to Search anything..."
          onKeyUp={changePhoto}
          onInput={(e) => {
            setPhoto(e.target.value);
          }}
          
        />
        
      </div>

      <div className="container">
        <div className="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div className="col-lg-3 col-md-4 col-6">
                <img
                  class="img-fluid img-thumbnail d-block mb-4 h-100"
                  src={value.urls.small}
                  alt=""
                  onClick={( value ) => {
                    return (
                      <a
                        href={value.urls.small}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-72 w-full object-cover rounded-lg shadow-md"
                          src={value.urls.small}
                          alt={value.alt_description}
                        />
                      </a>
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
