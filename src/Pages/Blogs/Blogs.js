import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <div>
        <h2 className="my-5">Q/A section</h2>
      </div>
     <div className="qasection p-5">
     <div>
        <h3>Difference between javascript and nodejs?</h3>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
      </div>
      <div>
        <h3>When should you use nodejs and when should you use mongodb?</h3>
        <p>
          Nodejs is a Javascript engine that you can write any application you
          want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too. <br />
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data.
        </p>
      </div>
      <div>
          <h3>Differences between sql and nosql databases?</h3>
          <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      </div>
     </div>
    </Container>
  );
};

export default Blogs;
