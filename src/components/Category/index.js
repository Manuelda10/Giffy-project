import React from "react";
import { Link } from "wouter";

export default function Category({ name, options = [] }) {
  return (
    <section>
          <h3>{name}</h3>
          <ul>
              {
                options.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            {popularGif}
                        </Link>
                    </li>
                ))
              }
          </ul>
    </section>
  );
}