import React from 'react';
import Image from 'next/image';

function Companies() {
  return (
    <div
      className="flex items-center justify-center text-3xl font-bold min-h-[11vh] "
      style={{ color: '#00A9FF' }}
    >
      <h2 className="text-2xl mb-5 text-[#00A9FF] font-bold">
        Partnered Companies:
      </h2>
      <ul className="flex justify-between gap-10 ml-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num} className="relative h-[4.5rem] w-[4.5rem]">
            <Image
              src={`/trusted${num}.png`}
              alt={`trusted brand ${num}`}
              width={200} // Set the width of the image
              height={500} // Set the height of the image
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
