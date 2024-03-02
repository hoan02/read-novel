import UserTable from "@/components/admin/UserTable";
import { getUsers } from "@/lib/actions/user.action";
import { OrganizationProfile } from "@clerk/nextjs";

const MembersPage = async () => {
  const users = await getUsers();
  const rows = users?.map((user) => ({
    id: user._id,
    avatar: user.avatar,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
  }));
  return (
    <div>
      <UserTable rows={rows} />
      <OrganizationProfile />
    </div>
  );
};

export default MembersPage;
