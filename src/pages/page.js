import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
const Post = ({ data }) => {
  return (
    <Layout pageTitle={data.pages.name}>
      <div dangerouslySetInnerHTML={{ __html: data.pages.content }} />
    </Layout>
  );
};

export const query = graphql`
  query ($key: String) {
    pages(key: { eq: $key }) {
      key
      name
      content
    }
  }
`;

export default Post;
