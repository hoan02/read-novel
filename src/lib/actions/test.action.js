import { clerkClient } from "@clerk/nextjs";

export const handle = async () => {
  try {
    const res = await clerkClient.organizations.createOrganizationMembership({
      // organizationId: process.env.ORGANIZATION_ID,
      organizationId: "org_2clJQR91pPIYxetu2Rdu4Xy5SOs",
      emailAddress: "leconghoancute69@gmail.com",
      role: "org:member",
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
