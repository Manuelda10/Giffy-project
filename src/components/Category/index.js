import React from "react";
import { Link } from "wouter";

export default function Category({ name, options = [] }) {

  return (
    <section>
          <h3 className="tendencias-content-title">{name}</h3>
          <ul className="category-list">
              {
                options.map((popularGif, indexGif) => (
                    <li key={popularGif}>
                        <Link className={"bg"+(indexGif%4)} to={`/search/${popularGif}`}>
                            {popularGif}
                        </Link>
                    </li>
                ))
              }
          </ul>
    </section>
  );
}