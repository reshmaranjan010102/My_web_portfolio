"use client";
import React from "react";
import { motion } from "framer-motion";
import Button4 from "./Button4";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "Task Management System",
      type: "SCDND Projects",
      description: (
        <>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Developed a task management feature for assigning, tracking, and
            managing tasks for employees and administrators.
          </p>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Included role-based dashboards, deadlines, and status updates to
            improve internal workflow transparency and efficiency.
          </p>
        </>
      ),
      demo: "videos/",
      image: "images/",
    },
    {
      id: 1,
      name: "Primary Market Portal",
      type: "SCDND Projects",
      description: (
        <>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Built a platform for clients to bid, buy, and sell products
            directly through the company’s portal.
          </p>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Implemented dynamic pricing, bidding validation, and
            real-time updates for seamless experience
          </p>
        </>
      ),
      demo: "videos/",
      image: "images/",
    },
    {
      id: 2,
      name: "Custom Payment Gateway with Reconciliation System",
      type: "SCDND Projects",
      description: (
        <>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Developed an in-house payment gateway system to track
            and manage financial transactions.
          </p>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Added reconciliation logic to ensure financial accuracy
            and reduce dependency on third-party payment services.
          </p>
        </>
      ),
      demo: "videos/",
      image: "images/",
    },
    {
      id: 3,
      name: "Messaging & Communication System",
      type: "BUWCH Projects",
      description: (
        <>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Built real-time chatrooms using WebSocket for clients
            and admins to communicate efficiently.
          </p>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Supported message logs, notifications, and multiple
            conversation threads for customer support and feedback.
          </p>
        </>
      ),
      demo: "videos/",
      image: "images/",
    },
    {
      id: 4,
      name: "Payment Gateway & Msg91 Integration",
      type: "BUWCH Projects",
      description: (
        <>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Integrated third-party payment gateways to facilitate
            secure transactions.
          </p>
          <p className="text-[#677a83] text-sm font-normal leading-normal">
            - Added Msg91 APIs to send automated SMS and
            WhatsApp messages to users for transaction
            confirmations, OTPs, and alerts.
          </p>
        </>
      ),
      demo: "videos/",
      image: "images/",
    },
  ];
  return (
    <div id="projects">
      <div className="px-40 flex flex-1 justify-center py-20 w-screen overflow-hidden">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="text-blue-600 tracking-light text-[32px] font-bold leading-tight flex justify-center gap-2"
          >
            <span className="relative border-t-2 border-dashed top-5 w-30"></span>
            Projects{" "}
            <span className="relative border-t-2 border-dashed top-5 w-30"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="relative text-[#677a83] text-sm text-center mb-8"
          >
            A selection of projects I've worked on, showcasing my skills and
            interests.
          </motion.p>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.3 }}
              className="flex items-stretch justify-between gap-4 rounded-xl my-6"
            >
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#121517] text-base font-bold leading-tight">
                    {project.name}
                  </p>
                  {project.description}
                </div>
                <Button4>View Demo</Button4>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgpBQ8OdK7Lvh9R8oDYKlWX0ZA5xnAdD_CF7XsthSq9JkKsuQ07GoNEYoklLl5R7WT2e7KGm9oAShSDx43Hm2zgfkJf1iZte4eX5ZpisdCVJMGOo5JTvdgKgLDBjecoM664wQIyTEhsuk1OA5aGOZvLBbqYQFpIHFZzn9WVDJ5Ab6zuzcUo1JSqxP1Jihk9HzVuiUK3zi5-bo3RzqRrIjwVNO-GLvI671DnlJ22N7n8MxEVedcMDmlK2zR9MKq4o7pwRM8OjSRrzHv")',
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
