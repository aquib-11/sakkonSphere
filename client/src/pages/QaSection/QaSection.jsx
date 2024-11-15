import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { ProfileSidebar, QuestionModal, Spinner } from "@/components";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import customFetch from "@/utils/customFetch";
import QuestionCard from "./components/QuestionCard";
import { useUser } from "@/context/UserContext";
import { toast } from "react-toastify";

export const questionsAction = async ({ request }) => {
  const result = await request.formData();
  const data = Object.fromEntries(result.entries());
  const tags = result.getAll("tags");
  data.tags = tags;
  try {
    const response = await customFetch.post("/qa-section", data);
    window.location.href = "/qa-section";
    return { success: response.data.msg };
  } catch (error) {
    return { error: error?.response?.data?.msg || "An error occurred during posting question." };
  }
};

export const questionsLoader = async () => {
  try {
    const { data } = await customFetch.get("/qa-section");
    return { questions: data.questions };
  } catch (error) {
    return {
      error:
        error?.response?.data?.msg ||
        "An error occurred during fetching questions.",
    };
  }
};

const QaSection = () => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { questions } = useLoaderData();

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto p-2 sm:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left sidebar */}
          <div className="hidden lg:block md:col-span-3">
            <div >
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

          {/* Middle section */}
          <div className="col-span-1 lg:col-span-6">
            {/* Header */}
            <div className="mb-3 text-center bg-white p-4 rounded-[10px]">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                Have a Question or Insight? Share it with Us!
              </h2>

              <div className="flex flex-row justify-center gap-2 sm:gap-4">
                <button
                  onClick={() => {
                    if (!user) {
                      toast.error("Please login to ask a question");
                      return;
                    }
                    setIsModalOpen(true);
                  }}
                  className="btn-1 w-full sm:w-auto"
                >
                  <FaQuestionCircle className="mr-2" />
                  Ask
                </button>
                <Link to="/answer" className="btn-2 w-full sm:w-auto text-center">
                  <AiOutlineComment className="mr-2" />
                  Answer
                </Link>
              </div>
            </div>

            {/* Questions List */}
            <div className="overflow-y-auto max-h-screen no-scrollbar rounded-[10px]">
              <Outlet context={{ questions }} />
            </div>
          </div>
        </div>

        {/* Question Modal */}
        <QuestionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default QaSection;
