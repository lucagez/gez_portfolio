import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout.js';
import SEO from '../components/seo/seo.js';
import Header from '../components/header/header.js';
import Gallery from '../components/gallery/gallery.js';
import Explainer from '../components/explainer/explainer.js';
import About from '../components/about/about.js';
import Contacts from '../components/contacts/contacts.js';
import Label from '../components/label/label.js';

const IndexPage = ({ data }) => {
  const greeting_message = `
    Hi visitor, glad to see you here.
    This website is also on a github repo.
    You can check it out here: 
    link
  `;
  console.log(greeting_message);
  const things = {};
  data.things.edges.forEach(e => {
    const node = e.node;
    things[node.id] = {};
    things[node.id].title = node.title;
    things[node.id].order = node.order;
    things[node.id].description = node.description;
    things[node.id].tags = node.tags.map(e => `<code>${e}</code>`).reduce((a, b) => a + b);
    things[node.id].link = node.link;
    things[node.id].warning = node.warn;
  });

  const images = data.images.edges.map(e => {
    const node = e.node;
    const name = node.name;
    const title = things[name].title;
    const description = things[name].description;
    const tags = things[name].tags;
    const warning = things[name].warning;
    const link = things[name].link;
    const order = things[name].order;
    
    return {
      src: node.publicURL,
      name: node.name,
      title,
      description,
      tags,
      warning,
      link,
      order,
    }
  }).sort((a, b) => a.order - b.order);
  
  const video = data.video.edges.map(e => {
    const node = e.node;
    const name = node.name;
    const title = things[name].title;
    const description = things[name].description;
    const tags = things[name].tags;
    const warning = things[name].warning;
    const link = things[name].link;
    const order = things[name].order;
    
    return {
      src: node.publicURL,
      name: node.name,
      title,
      description,
      tags,
      warning,
      link,
      order,
    }
  }).sort((a, b) => a.order - b.order);
  
  return (
    <Layout>
      <SEO />
      <Header />
      <Explainer what={'projects'} />
      <Gallery video={video}/>
      <Explainer what={'about'} />
      <About />
      <Explainer what={'contacts'} />
      <Contacts />
      <Label />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  images:allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { order: ASC, fields: [absolutePath] }) {
    edges {
      node {
        publicURL
        name
      }
    }
  }
  video:allFile(filter: { sourceInstanceName: { eq: "video" } }, sort: { order: ASC, fields: [absolutePath] }) {
    edges {
      node {
        publicURL
        name
      }
    }
  }
  things:allJson {
    edges {
      node {
        id
        order
        title
        tags
        link
        description
        warn
      }
    }
  }
}
`