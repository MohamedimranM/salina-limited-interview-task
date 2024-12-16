import { HeadSection } from "@/components/headSection";
import { Management } from "@/components/management";
import { MissionValue } from "@/components/missionValue";
import PropertyList from "@/components/property";
import { UserProfile } from "@/components/userProfile";
import { UserSection } from "@/components/userSection";

export default function Home() {
  return (
   <div className="d-flex justify-content-center flex-column container mb-5">
    <HeadSection/>
    <UserSection/>
    <UserProfile/>
    <MissionValue/>
    <Management/>
    <PropertyList/>
  </div>
  );
}
