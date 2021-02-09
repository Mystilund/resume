import React from 'react'
import Work from '../../blocks/Work'
import olst from '../../assets/images/olst.png'
import kimple from '../../assets/images/kimple.png'
import etix from '../../assets/images/etix.jpg'
import simplifield from '../../assets/images/simplifield.jpg'
import lundorg from '../../assets/images/lundorg.png'

const Projects = () => {
  return (
    <div className="project-container">
      <h2>Current work</h2>
      <Work title="Simplifield" img={simplifield}>
        <p>Currently working in Simplifield</p>
        <p className="work-date">2020 - now</p>
      </Work>
      <hr />
      <h2>Previous work</h2>
      <Work title="OliverStore" img={olst}>
        <p>Oliverstore is an e-commerce company. The main website is stores-discount.com</p>
        <p>Because the business is based on custom product, a simple e-commerce solution like Magento is not possible, so everything was build based on modern technolgies</p>
        <p>The IT stack is built thanks to Sylius (PHP)), microservices made with Hapi (Node), the front uses React and Vue, and everything is working on a SOA design, running on AWS (EC2, Beanstalk, RDS, ECR...)</p>
        <p>I worked on the website (front or back) and the back microservices. Here is some examples of what I did :</p>
        <ul>
          <li>A lot on admin tools like the management of the categories, the advice pages, tools for promotions (Sylius, React)</li>
          <li>The front of the user account (Vue, React)</li>
          <li>I initiated the transition to the responsive design (HTML/CSS)</li>
          <li>The payment microservice or the input help suggestion microservice (Hapi)</li>
          <li>Some SEO optimization</li>
          <li>...</li>
        </ul>
        <p className="work-date">2017-2020</p>
      </Work>
      <Work title="Cassiop" img={kimple}>
        <p>Cassiop is a company which powered a solution named Kimple.</p>
        <p>Kimple is a platform where you can configure a contest to promote a product or to increase you audience.</p>
        <p>The IT stack is pretty simple, it is based on Laravel (PHP) and some JQuery for the front. When I left the company a transition to VueJS began to remove JQuery.</p>
        <p>Here are some examples of what I did there :</p>
        <ul>
          <li>Creation of some games (like a wheel of fortune or an advent calendar)</li>
          <li>A lot of refactoring of old code to have a clean codebase</li>
          <li>A system of advance statistics to give a global view of the audience based on each contest stats of the client</li>
          <li>...</li>
        </ul>
        <p className="work-date">2015-2017</p>
      </Work>
      <Work title="Etix Everywhere" img={etix}>
        <p>Etix Everywhere is an innovative datacenter company. The goal is to provide custom datacenters which can fit everywhere and which are ecologic</p>
        <p>I was just an intern back in time when with 9 other interns we created a base for the IT service.</p>
        <p>The IT stack at that moment was a backoffice performed with Yii (PHP) and using AngularJS which was the first advance front framework. It was the base of the modern front framework like React, Vue and Angular.</p>
        <p>Here are some examples of what I did there :</p>
        <ul>
          <li>Creation of a calendar and a management of the physical datacenter accesses</li>
          <li>Webapp to create modular and dynamic forms</li>
          <li>...</li>
        </ul>
        <p className="work-date">2014</p>
      </Work>
      <hr />
      <h2>Open Source projects</h2>
      <Work title="Lund-Org" img={lundorg}>
        <p>The <a href="https://github.com/Lund-Org" target="_blank" rel="noopener noreferrer">Lund-Org</a> is a Github organization for open source projects.</p>
        <p>I'm mainly alone for now but there are some interesting projects :</p>
        <h3><a href="https://github.com/Lund-Org/cherry" target="_blank" rel="noopener noreferrer">Cherry <span role="img" aria-label="cherry emoji">🍒</span></a></h3>
        <p>The main project, the most successful open source project I made, it is a node Framework I created from scratch. It is a very light framework which was built to match with every needs and where you can add plugins if you need more features. I didn't like the idea of some framework to provide a lot of tools but you don't it, and Cherry was made to solve this issue.</p>
        <p>As said, there are plugins you can add to Cherry, here are some basic features I provided :</p>
        <ul>
          <li><a href="https://github.com/Lund-Org/cherry-handlebars-connector" target="_blank" rel="noopener noreferrer">Cherry Handlebars Connector</a></li>
          <li><a href="https://github.com/Lund-Org/cherry-pug-connector" target="_blank" rel="noopener noreferrer">Cherry Pug Connector</a></li>
          <li><a href="https://github.com/Lund-Org/cherry-typeorm-connector" target="_blank" rel="noopener noreferrer">Cherry TypeORM Connector</a></li>
          <li><a href="https://github.com/Lund-Org/cherry-sequelize-connector" target="_blank" rel="noopener noreferrer">Cherry Sequelize Connector</a></li>
        </ul>
        <p>And of course a framework needs to come with a documentation which can be found <a href="https://github.com/Lund-Org/cherry-documentation" target="_blank" rel="noopener noreferrer">here</a> (WIP)</p>
        <h3><a href="https://github.com/Lund-Org/discord-bot" target="_blank" rel="noopener noreferrer">Discord Bot</a></h3>
        <p>I needed a discord bot, so I created one. At the same time, I had to learn Typescript, so it was the right moment to do it.</p>
        <h3><a href="https://github.com/Lund-Org/twitch-get-events" target="_blank" rel="noopener noreferrer">Twitch Get Events</a></h3>
        <p>This library was the first project of the organization made with another contributor. Back in time, Twitch had an event system that could be used to create a calendar. This feature has been removed, so this library can't be used anymore and the repository has been archived.</p>
        <h3>Livedeck</h3>
        <p>This project is separated in multiple apps. The idea behind it is to compete with the Streamdeck of Elgato with a free alternative solution.</p>
        <p>Everybody has a smartphone, so why not use it instead of the streamdeck to press buttons and interact with your stream ? So the idea was to have a <a href="https://github.com/Lund-Org/livedeck-remote-webapp" target="_blank" rel="noopener noreferrer">webapp</a> on your smartphone which communicates with the <a href="https://github.com/Lund-Org/livedeck-server" target="_blank" rel="noopener noreferrer">livedeck server</a> (with your presets and account). This server is linked to an <a href="https://github.com/Lund-Org/livedeck-software-webapp" target="_blank" rel="noopener noreferrer">electron app</a> running on the stream computer.</p>
        <p>The project was never finished and is for now paused.</p>
        <p className="work-date">2018-2020</p>
      </Work>
    </div>
  )
}

export default Projects
