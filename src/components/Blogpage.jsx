import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import AppLayout from "./AppLayout";
import BlogPage from "./MockData/BlogeMock";
const Blogpage = () => {
  const { id } = useParams();
  const product = BlogPage.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Blogpage not found</div>;
  }
  return (
    <div id="">
      <AppLayout>
        <div className="mx-auto sm:mx-14  bg-white py-[20px]">
          <Link to="/">
            <button class="bg-[#000] hover:bg-[#010101] text-white text-[24px] font-bold py-2 px-4 rounded flex gap-2 ml-4 mb-3">
              <IoArrowBackCircleSharp className="h-10" /> Back
            </button>
          </Link>
          <div className="sm:pt-[60px] pt-8   mx-8 sm:mx-auto  bg-[#DFDFDF] rounded-xl">
            <img
              src={product.img}
              alt=""
              className="w-[120px] sm:w-[300px] sm:h-[300px] h-[120px] rounded-full border-4  border-[#F6931E]  mx-auto"
            />
          </div>
          <div className="sm:mt-10 mt-6 mx-10">
            <h2 className="text-[#000] font-bold pb-12 text-start ml-2 text-[20px]">
              Best Physician Doctor In Indore
            </h2>
            <p className="font-normal text-[17px] sm:mx-10  tracking-[1px]  text-start  pb-10">
              In Today's Fast-Paced World, It's Easy To Put Our Health On The
              Back Burner. Between Work, Family, And Daily Responsibilities,
              Finding The Time For A Doctor's Visit Can Sometimes Feel Like A
              Low Priority. However, Regular Check-Ups With A Trusted Medical
              Professional Like Dr. Kulbhushan Kanase, MD, Can Make A
              Significant Difference In Your Overall Well-Being. Dr. Kulbhushan
              Kanase Is A Seasoned Physician With Over 5 Years Of Experience In
              The Field Of General Medicine. His Commitment To Providing Trusted
              Medical Guidance And Treatment Has Earned Him A Reputation As A
              Dependable Healthcare Provider In The Community. Why Regular
              Check-Ups Matter Early Detection Of Health Issues: Regular
              Check-Ups Are Not Just About Addressing Existing Health Concerns
              But Also About Catching Potential Problems In Their Early Stages.
              Dr. Kanase's Expertise Allows Him To Identify Issues Before They
              Escalate, Potentially Saving You From More Extensive Treatments
              Down The Line. Personalized Care: Every Individual Is Unique, And
              Dr. Kanase Understands This. During Your Regular Check-Ups, He
              Takes The Time To Understand Your Specific Medical History,
              Lifestyle, And Concerns. This Personalized Approach Ensures That
              You Receive The Most Appropriate Care Tailored To Your Needs.
              Preventive Healthcare: Preventive Care Is A Cornerstone Of Dr.
              Kanase's Practice. He Emphasizes The Importance Of Lifestyle
              Modifications, Vaccinations, And Screenings To Keep You Healthy
              And Reduce The Risk Of Future Illnesses. Peace Of Mind: Knowing
              That You Have A Trusted Physician Like Dr. Kulbhushan Kanase To
              Turn To Can Provide Peace Of Mind. It's Reassuring To Have A
              Healthcare Partner Who Knows Your Medical History And Can Guide
              You Through Various Health Challenges. Building A Long-Term
              Relationship: Regular Check-Ups With Dr. Kanase Allow You To Build
              A Long-Term Doctor-Patient Relationship. This Relationship Fosters
              Trust And Communication, Making It Easier To Discuss Sensitive
              Health Topics And Make Informed Decisions About Your Care. In
              Conclusion, Prioritizing Your Health By Scheduling Regular
              Check-Ups With Dr. Kulbhushan Kanase, MD, Is A Crucial Step Toward
              Maintaining A Healthy And Fulfilling Life. His Extensive
              Experience, Personalized Approach, And Commitment To Preventive
              Healthcare Make Him The Ideal Choice For All Your Medical Needs.
              Don't Wait Until Health Issues Become Urgent. Take Proactive Steps
              To Care For Yourself And Your Loved Ones By Entrusting Your Health
              To Dr. Kanase's Capable Hands. Schedule Your Next Check-Up Today
              And Invest In A Healthier Future.
            </p>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Blogpage;
