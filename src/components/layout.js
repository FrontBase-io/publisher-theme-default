import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  header,
  footer,
  content,
  hero,
} from "./layout.module.scss";
import "./layout.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ pageTitle, children }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
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
            design_settings {
              name
              color {
                r
                g
                b
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          style={{
            backgroundColor: `rgb(${data.site.design_settings.color.r},${data.site.design_settings.color.g},${data.site.design_settings.color.b})`,
          }}
        >
          <StaticImage
            src="https://picsum.photos/1280/400"
            alt="A kitten"
            className={hero}
          />
          <div className={header}>
            <div style={{ flex: 1 }}>
              <Link to="/" className={navLinkText}>
                {data.site.design_settings.name}
              </Link>
            </div>
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
          </div>
          <div className={content}>
            <div className={container}>
              <title>{pageTitle}</title>
              <main>
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  {pageTitle}
                </h1>
                {children}
              </main>
            </div>
          </div>
          <div className={footer}>Footer</div>
        </div>
      )}
    />
  );
}
