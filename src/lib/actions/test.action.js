import { clerkClient } from "@clerk/nextjs";

export const joinOrganization = async () => {
  try {
    const organization =
      await clerkClient.organizations.createOrganizationMembership({
        // organizationId: process.env.ORGANIZATION_ID,
        organizationId: "org_2clJQR91pPIYxetu2Rdu4Xy5SOs",
        emailAddress: "leconghoancute69@gmail.com",
        role: "org:reader",
      });
    console.log(organization);
  } catch (err) {
    console.log(err);
  }
};
