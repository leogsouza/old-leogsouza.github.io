import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>GFT Brazil Tecnologies</h3>
          <p className="info">
            Systems Analyst
            <span>&bull;</span>
            <em className="date">October 2016 - Present</em>
          </p>

          <p>
            Currently I working with a client's project as a member of development team responsible for developing a solution with 
            microservices architecture using CQRS pattern. My work is implement some of the microservices using Java 8 with Spring Boot, Cassandra and Redis
            as database and Kafka as Message Bus. The team works using Agile practice Scrum to manage the development process.

            To deploy the microservices we use the Azure Cloud Platform following CI/CD process.
          </p>
          <p>
            Before last project I worked in a client project using Node.js to develop an REST API for upload some sheets and
            read the content to save into a MongoDb database and make an integreation with legacy systems. The deploy was
            done own bank's platform using Jenkis as tool to do it.
          </p>
          <p>
            In my first project in this company I worked with a client's project using RAML re-design and Node.js 
            develop a lot of legacy API's using the best practices to develop the new API's.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Porto Seguros</h3>
          <p className="info">
            Software Developer
            <span>&bull;</span>
            <em className="date">July 2015 - May 2016</em>
          </p>

          <p>
            At this company I worked mainly with PHP and Node.js and my resposibility was develop new functionalities the
            platform used to connect the customers and the insurance brokers. 
            This platform was built with PHP using Laravel framework and  there was one chat module built with Node.js.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Editora Moderna</h3>
          <p className="info">
            PHP Developer
            <span>&bull;</span>
            <em className="date">February 2014 - Jun 2015</em>
          </p>

          <p>
            Development of a portal for customer records and selling textbooks. Development of webservices using API REST. 
            Using Yii framework, emphasis on development using Scrum methodology.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>W51 Informática e Marketing</h3>
          <p className="info">
            PHP Developer
            <span>&bull;</span>
            <em className="date">February 2014 - Jun 2015</em>
          </p>

          <p>
            Development of e-commerce with Magento, server configuration for deploying, and development of 
            customized websites using Wordpress.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>NA5 Consultoria e Comércio</h3>
          <p className="info">
            Web Developer
            <span>&bull;</span>
            <em className="date">October 2013 - February 2014</em>
          </p>

          <p>
            Development of e-commerce with Magento, server configuration for deploying, and development of 
            customized websites using Wordpress.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Tracersoft Tecnologia e Sistemas</h3>
          <p className="info">
            Web Developer
            <span>&bull;</span>
            <em className="date">May 2009 - February 2013</em>
          </p>
          <p>
            Development of systems focused on sustainability using Yii framework. Development of e-commerce with Magento, 
            server configuration for deploying, and development of customized websites using Wordpress.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
