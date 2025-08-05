import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { anton, geistMono } from '@/utils/fonts';
import Project from './Project';
import Naachogao from "@/public/naachogaao-landing.png"
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
            images={[Naachogao,NaachogaoMob]}
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
            images={[Anaira,AnairaMob]}
        />
      </div>

    </motion.div>
  );
}
