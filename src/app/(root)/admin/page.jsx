import InvitationList from "@/components/writer/InvitationList";
import { OrganizationProfile } from "@clerk/nextjs";

const AdminPage = () => {
  return (
    <div className="w-full h-full">
      <OrganizationProfile />
      <InvitationList />
      oke
    </div>
  );
};

export default AdminPage;
