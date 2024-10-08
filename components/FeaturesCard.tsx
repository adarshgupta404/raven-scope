import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaBookReader, FaUserCheck } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Claims Verification",
    icon: <SiTicktick />,
    description:
      "We verify the authenticity of insurance claims to prevent fraud and ensure that legitimate claims are processed promptly.",
  },
  {
    title: "Surveillance",
    icon: <RiSurveyLine />,
    description:
      "Our investigators use state-of-the-art surveillance techniques to gather evidence, monitor claimants, and uncover any discrepancies.",
  },
  {
    title: "Background Checks",
    icon: <FaUserCheck />,
    description:
      "We conduct thorough background checks to assess claimants' credibility and identify any potential red flags.",
    link: "https://google.com",
  },
  {
    title: "Witness/Documentation Analysis",
    icon: <FaBookReader />,
    description:
      "Our skilled interviewers collect statements from witnesses & analyze all relevant documents to provide a complete picture of the claim.",
    link: "https://meta.com",
  },
  {
    title: "Video Call Verification",
    icon: <MdOutlineVideoCall />,
    description:
      "In the ever-evolving landscape of identity verification and fraud prevention, our company offers Video Call Verification services.",
    link: "https://amazon.com",
  },
  {
    title: "Unparalleled Expertise",
    icon: <SiTicktick />,
    description:
      "Our investigators are highly trained and have years of experience in insurance claim investigations and are well-versed in legal requirements.",
    link: "https://microsoft.com",
  },
];
