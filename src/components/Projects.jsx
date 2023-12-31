import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'
import project1 from '../assets/projects/Project1.png'
import project2 from '../assets/projects/Project2.png'
import project3 from '../assets/projects/Project3.png'
import project4 from '../assets/projects/Project4.png'

import HTML from "../assets/stack/HTML.png"
import CSS from "../assets/stack/CSS.png"
import tailwind from "../assets/stack/Tailwind.png"
import Js from "../assets/stack/Javascript.svg"
import react from "../assets/stack/React.png"
import redux from "../assets/stack/Redux.svg"
import nextCircle from "../assets/stack/NextJsCircle.png"
import node from "../assets/stack/NodeJs.svg"
import mongo from "../assets/stack/MongoDB.svg"
import graphql from "../assets/stack/Graphql.svg"
import vercel from "../assets/stack/Vercel.svg"
import git from "../assets/stack/Git.svg"
import github from "../assets/stack/Github.svg"
import k8s from "../assets/stack/K8s.svg"

const Projects = () => {

    const [showC1, setShowC1] = useState(false);
    const [showC2, setShowC2] = useState(false);
    const [showC3, setShowC3] = useState(false);
    const [showC4, setShowC4] = useState(false);

    return (
        <section className=' lg:-my-6 bg-[#e7e7e7] flex flex-col items-center justify-center w-full mt-60' id='projects'>
            <h1 className='text-[#ff4500] text-[90px] text-center'>Projects</h1>
            <div className='lg:max-w-[1200px] w-full mx-auto lg:p-12 flex flex-col p-4 gap-32'>
                <Card
                    background={project1}
                    tech={[HTML, CSS, Js, nextCircle, tailwind, react, node, mongo, redux, git, github]}
                    title={"Study Notion"}
                    desc={"Its a full fleged Edtech platform for teachers and students"}
                    number={"01"}
                    github={"https://github.com/krishna4040/study-notion"}
                    align={"right"}
                    setShow={setShowC1}
                />
                <Card
                    background={project2}
                    tech={[HTML, CSS, Js, nextCircle, tailwind, redux, vercel]}
                    title={"Together"}
                    desc={"A platform for real time messaging audio and video call"}
                    number={"02"}
                    align={"left"}
                    setShow={setShowC2}
                    link={"https://together-social-media.netlify.app/"}
                    github={"https://github.com/krishna4040/Together"}
                />
                <Card
                    background={project3}
                    tech={[HTML, CSS, Js, nextCircle, tailwind, vercel, graphql, k8s]}
                    title={"Recyclez"}
                    number={"03"}
                    align={"right"}
                    desc={"It is a waste Redistribution System"}
                    setShow={setShowC3}
                    github={"https://github.com/krishna4040/Recyclez"}
                />
                <Card
                    background={project4}
                    tech={[HTML, CSS, Js, nextCircle, tailwind]}
                    title={"Dev Detectives"}
                    number={"04"}
                    align={"left"}
                    desc={"This is a morden web app that uses github api to fecth user accounts and details"}
                    setShow={setShowC4}
                    github={"https://github.com/krishna4040/dev-detective"}
                    link={"https://github-profile-get.netlify.app/"}
                />
            </div>
            {showC1 && <Modal link={""} title={"Study Notion"} content={"Study Notion is a cutting-edge, all-in-one educational technology platform that redefines the way we learn and teach. It's designed to address the modern challenges in education while leveraging the power of MERN technology stack to provide a seamless, efficient, and engaging learning experience."} show={showC1} setShow={setShowC1} />}
            {showC3 && <Modal link={""} title={"Recyclez"} content={"Recylez is a waste redistribution system built using the mern stack. It targets individuals in small area and big organisation and ngos in big cities. it assigns user roles as supplier and receiver at each succesuful login and helps in redistributing waste"} show={showC3} setShow={setShowC3} />}
            {showC4 && <Modal link={"https://github-profile-get.netlify.app/"} title={"Dev Detectives"} content={"This is a morden web app that uses github api to fecth user accounts and details"} show={showC4} setShow={setShowC4} />}
            {showC2 && <Modal link={"https://together-social-media.netlify.app/"} title={"Together"} content={"This is a morden social media platform with all the features such as posting , chatting , audio and video calling , connecting with friends. i ve used webRtc to integrate Real time communication features."} show={showC2} setShow={setShowC2} />}
        </section>
    )
}

export default Projects