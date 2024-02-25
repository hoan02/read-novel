"use client";

import { useClerk } from "@clerk/nextjs";

const TestPage = () => {
  const clerk = useClerk();
  console.log(clerk);
  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default TestPage;
