import { auth, OrganizationList, OrganizationProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import styles from "@/styles/home.module.css";

const HomePage = () => {
  const { sessionClaims } = auth();
  const fullName = sessionClaims?.fullName;
  const email = sessionClaims?.email;
  const role = sessionClaims?.role;
  const orgSlug = sessionClaims?.org_slug;

  // if (orgSlug) {
  //   redirect(`/${orgSlug}`);
  // }

  return (
    <div className={styles.home}>
      <div className="flex">
        <div className="w-2/3">left</div>
        <div className="w-1/3">right</div>
        <div>cay vcl</div>
      </div>
    </div>
  );
};

export default HomePage;
