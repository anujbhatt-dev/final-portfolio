import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { anton, geistMono } from '@/utils/fonts';
import Project from './Project';
import Naachogao from "@/public/naachogaao-landing.png"
import NG1 from "@/public/ng-1.png"
import NG2 from "@/public/ng-2.png"
import NG3 from "@/public/ng-3.png"
import AN1 from "@/public/an-1.png"
import AN2 from "@/public/an-2.png"
import AN3 from "@/public/an-3.png"
import AN4 from "@/public/an-4.png"
import AN5 from "@/public/an-5.png"
import AN6 from "@/public/an-6.png"
import AN7 from "@/public/an-7.png"
import EE1 from "@/public/ee-1.png"
import EE2 from "@/public/ee-2.png"
import EE3 from "@/public/ee-3.png"
import EE4 from "@/public/ee-4.png"
import EE5 from "@/public/ee-5.png"
import EE6 from "@/public/ee-6.png"
import EE7 from "@/public/ee-7.png"
import EE8 from "@/public/ee-8.png"
import EE9 from "@/public/ee-9.png"
import EE10 from "@/public/ee-10.png"
import EE11 from "@/public/ee-11.png"
import EE12 from "@/public/ee-12.png"
import EE13 from "@/public/ee-13.png"

import NaachogaoMob from "@/public/naachogaao-landing-mobile.png"
import Anaira from "@/public/anaira.png"
import AnairaMob from "@/public/anaira-mobile.png"
import TopicHeading from './TopicHeading';
import SmallHeading from './ui/SmallHeading';

export default function RecentWork() {
  const ref = useRef(null);


  return (
    <motion.div
      ref={ref}
      className={`${geistMono.className}  min-h-screen `}
    >
      <TopicHeading text="Recent work" pad={true}/>
      <SmallHeading text="I DID" cn="text-green-500 pb-10 lg:pb-20"/>
      <div className='text-sm'>
        <Project
            title={"Naachogaao - A Real Time Collaborative Music Streaming App"}
            description='Naachogaao is an innovative, real-time, YouTube-based collaborative streaming platform designed for group entertainment and interactive content curation. It enables users to create virtual "rooms" where friends can join, add streams, vote on the playlist, and enjoy a dynamic, community-driven playback experience.'
            features={[
              "Role-Based Streaming Rooms: Creators control playback; members can add YouTube streams and vote for the next one in the queue.",
              "Real-Time Voting & Sync: Live stream queue updates and voting handled via Socket.IO for seamless collaboration.",
              "Personal Dashboards: Users can manage streams, share room links, and track activity in real time.",
              "YouTube Integration: Embedded video playback using the YouTube API, supporting multi-user interaction."
            ]}
            techstack={[
              "Nodejs",
              "Nextjs",
              "Socket.io",
              "Clerk",
              "Aceternity UI",
              "React Bits"
            ]}
            id={1}
            images={[Naachogao,NaachogaoMob,NG1,NG2,NG3]}
            links={{
              code:"https://github.com/anujbhatt-dev/muzer",
              site:"https://naachogaao.anujbhatt.com/"
            }}
        />
        <Project
            title={"Anaira - Ecommerce App"}
            description='Anaira is a modern e-commerce application built for scalability and global reach. It features dynamic product management, secure user authentication, seamless payment integration, and optimized media storage — all wrapped in a high-performance, user-friendly interface.'
            features={[
              "User Authentication with Clerk – Secure sign-up, login, and session management.",
              "Optimized Image Delivery – Product images stored and served via AWS S3 for faster load times.",
              "Dynamic Product Management – Easily add, update, or remove products using Sanity CMS.",
              "Responsive Design – Seamless shopping experience across mobile, tablet, and desktop devices."
            ]}
            techstack={[
              "Nextjs",
              "Sanity CMS",
              "Clerk, S3",
              "Tailwind CSS",
              "Stripe",
              "AWS S3"
            ]}
            id={2}
            images={[Anaira,AnairaMob,AN1,AN2,AN3,AN4,AN5,AN6,AN7]}
            links={{
              code:"https://github.com/anujbhatt-dev/sanaira",
              site:"https://anaira.style/"
            }}
        />
        <Project
            title={"Exim Education - Export-Import Learning Platform"}
            description='Exim Education is a premier platform providing specialized training in Export-Import business operations. It offers online and offline courses designed by industry experts, empowering students and entrepreneurs to confidently navigate international trade.'
            features={[
              "Course Management System – Structured curriculum with modules, video lessons, and downloadable resources.",
              "Student Dashboard – Personalized access to course progress, certificates, and support.",
              "Payment Integration – Smooth enrollment process through secure online payment systems.",
              "Responsive UI – Fully responsive design ensures smooth learning across all devices.",
              "Blog & Knowledge Base – Regularly updated with tips, guides, and industry news to support learners."
            ]}
            techstack={[
              "Reactjs",
              "Scss",
              "Razorpay",
              "PWA",
              "Google Analytics"
            ]}
            id={3}
            images={[EE1,EE2,EE3,EE4,EE5,EE6,EE7,EE8,EE9,EE10,EE11,EE12,EE13]}
            links={{
              code:"https://github.com/anujbhatt-dev/exim_v2",
              site:"https://eximeducation.com/"
            }}
        />
      </div>

    </motion.div>
  );
}
