import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.scss";

export default function Layout({ pageTitle, children }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site(key: { eq: "frontbase-io" }) {
            name
            description
            key
            menus {
              main {
                items {
                  label
                  to
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={container}>
          <title>{pageTitle}</title>
          <nav>
            <ul className={navLinks}>
              {data.site.menus.main.items.map((item) => (
                <li className={navLinkItem} key={item.to}>
                  <Link to={item.to} className={navLinkText}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      )}
    />
  );
}
