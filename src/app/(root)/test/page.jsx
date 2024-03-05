"use client";

import { toast } from "react-toastify";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import ImageCrop from "@/components/ImageCrop";

const Test = () => {
  return (
    <div className="bg-white w-full h-96">
      <ImageCrop />

    
    </div>
  );
};

export default Test;

// import { useOrganization } from "@clerk/clerk-react";

// export default function MemberList() {
//   const { memberships } = useOrganization({
//     memberships: {
//       infinite: true, // Append new data to the existing list
//       keepPreviousData: true, // Persist the cached data until the new data has been fetched
//     },
//   });

//   if (!memberships) {
//     // Handle loading state
//     return null;
//   }

//   return (
//     <div className="bg-white">
//       <h2>Organization members</h2>
//       <ul>
//         {memberships.data?.map((membership) => (
//           <li key={membership.id}>
//             {membership.publicUserData.firstName}{" "}
//             {membership.publicUserData.lastName} &lt;
//             {membership.publicUserData.identifier}&gt; :: {membership.role}
//           </li>
//         ))}
//       </ul>

//       <button
//         disabled={!memberships.hasNextPage} // Disable the button if there are no more available pages to be fetched
//         onClick={memberships.fetchNext}
//       >
//         Load more
//       </button>
//     </div>
//   );
// }

// import { useOrganizationList } from "@clerk/clerk-react";
// import React from "react";

// const InvitationsTable = () => {
//   const { isLoaded, userInvitations } = useOrganizationList({
//     userInvitations: {
//       infinite: true,
//       keepPreviousData: true,
//     },
//   });

//   if (!isLoaded || userInvitations.isLoading) {
//     return <>Loading</>;
//   }

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Org name</th>
//           </tr>
//         </thead>

//         <tbody>
//           {userInvitations.data?.map((inv) => (
//             <tr key={inv.id}>
//               <th>{inv.emailAddress}</th>
//               <th>{inv.publicOrganizationData.name}</th>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         disabled={!userInvitations.hasPreviousPage}
//         onClick={userInvitations.fetchPrevious}
//       >
//         Prev
//       </button>
//       <button
//         disabled={!userInvitations.hasNextPage}
//         onClick={userInvitations.fetchNext}
//       >
//         Next
//       </button>
//     </>
//   );
// };

// export default InvitationsTable;
