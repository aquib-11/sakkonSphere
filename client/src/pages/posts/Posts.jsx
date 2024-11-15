import React, { useState } from "react";
import { GroupsSidebar, ProfileSidebar } from "@/components";
import { Outlet } from "react-router-dom";
import { useUser } from "@/context/UserContext";

const Posts = () => {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);

  const groups = [
    {
      id: 1,
      name: "Mindfulness Practices 🧘‍♂️",
      image: "https://example.com/image_mindfulness.jpg",
    },
    {
      id: 2,
      name: "Coping with Anxiety 💭",
      image: "https://example.com/image_anxiety.jpg",
    },
    {
      id: 3,
      name: "Therapy Techniques 📖",
      image: "https://example.com/image_therapy.jpg",
    },
    {
      id: 4,
      name: "Depression Support Group ❤️",
      image: "https://example.com/image_depression.jpg",
    },
    {
      id: 5,
      name: "Stress Management Workshops 🌱",
      image: "https://example.com/image_stress.jpg",
    },
  ];


  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-4">
      <div className="grid grid-cols-12 gap-2">
        {/* Left Sidebar - Groups */}
        <div className="rounded-[10px] shadow-sm hidden lg:block lg:col-span-3  h-screen overflow-y-auto">
          <GroupsSidebar groups={groups} />
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-6 space-y-4">
          {/* Add Post Card */}
          <div className="overflow-y-auto max-h-screen no-scrollbar rounded-[10px]">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar - Profile */}
        <div className="hidden shadow-sm lg:block lg:col-span-3  rounded-[10px]">
          <ProfileSidebar
            username={user ? user.name : "Anonymous"}
            userTag="Mental Health Advocate"
            questionsPosted={33}
            answersPosted={44}
            savedItems={["Mindfulness Techniques", "Stress Reduction"]}
            recentItems={["Mental Health", "Mindfulness Practices"]}
            groups={["Mindfulness and Meditation", "Therapy Techniques"]}
            followedHashtags={["#mentalhealth", "#mindfulness", "#selfcare"]}
            events={["Mental Wellness Workshop", "Mindfulness Session"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
