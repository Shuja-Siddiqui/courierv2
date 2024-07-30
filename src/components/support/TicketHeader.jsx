import React from "react";

const TicketHeader = () => {
  return (
    <div className="w-[60%]">
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center">
            <span className="text-white">U</span>
          </div>
          <div className="ml-2">
            <div className="font-bold">Upwork Support Team</div>
            <div className="text-xs text-gray-400">May 31, 2024 22:45</div>
          </div>
        </div>
        <p className="text-gray-300 text-sm">
          Hi Muhammad,
          <br />
          Our Trust & Safety team recently reviewed your account and found that
          more than one person may be accessing it.
          <br />
          Upwork's Terms of Service prohibit account sharing or duplication in
          any way because of the security risk this poses both to the account
          owner and to the integrity of the Upwork platform as a whole. Everyone
          using Upwork needs their own account. Additionally, subcontracting is
          limited to fixed-price contracts and contracts with agencies. We
          encourage agents to create a Team and freelancers to create and manage
          an Agency to help their organizations collaborate on Upwork.
          <br />
          Until we can get this sorted out together, we've placed restrictions
          on your account that limit what you can do on Upwork.
          <br />
          What's next?
          <br />
          In order to get back to using Upwork, we would like you to verify your
          identity. Doing so helps us keep Upwork safe by ensuring everyone
          knows who they are working with.
          <br />
          1. Please follow this link{" "}
          <a href="#" className="text-blue-400 underline">
            https://link.to/verify
          </a>{" "}
          within the next few days to complete identity verification.
        </p>
      </div>
    </div>
  );
};

export default TicketHeader;
