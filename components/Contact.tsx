import React from 'react';

const Contact = () => {
  return (
    <form
      action=""
      className="grid grid-cols-4 space-y-3 gap-4 my-10 w-full max-w-[450px] mx-auto md:max-w-[800px]"
    >
      <h1 className="col-span-4 text-center text-white font-semibold text-4xl mb-5">
        Let&apos;s Talk!
      </h1>
      <input
        type="text"
        className="col-span-4 md:col-span-2 rounded bg-[#323744] px-3 py-2 text-white my-2 lg:my-4 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
        placeholder="First Name"
      />
      <input
        type="text"
        className="col-span-4 md:col-span-2 rounded bg-[#323744] px-3 py-2 text-white my-2 lg:my-4 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
        placeholder="Last Name"
      />
      <input
        type="text"
        className="col-span-4 rounded bg-[#323744] px-3 py-2 text-white my-2 lg:my-4 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
        placeholder="Email"
      />
      <textarea
        name=""
        id=""
        className="col-span-4 rounded bg-[#323744] px-3 py-2 text-white my-2 lg:my-4 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
        placeholder="Your Message"
        rows={5}
      ></textarea>
      <div className="col-span-4 flex justify-end">
        <button className="w-fit px-4 py-1 rounded my-4 bg-[#BFA181] text-stone-200">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contact;
