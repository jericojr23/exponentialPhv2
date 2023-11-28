import Image from 'next/image';
import Link from 'next/link';

const ApplicantCard = ({ applicant }) => {
  // console.log(applicant);
  return (
    <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${
        applicant.name
          ? 'bg-amber-50 border-amber-300'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className='md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2'>
        {/* Left side */}
        <div className='flex items-start space-x-3 md:space-x-4'>
          <div className='w-9 h-9 shrink-0 mt-1'>
            <Image
              className='w-9 h-9 rounded-full'
              src={applicant.profilePhoto.url}
              width={applicant.profilePhoto.width}
              height={applicant.profilePhoto.height}
              alt={`${applicant.name} - ${applicant.profilePhoto.alt}`}
            />
          </div>
          <div>
            <Link href={`/applicant/${applicant.slug}`}>
              <a
                className='inline-flex font-semibold text-slate-800'
                href={`/applicant/${applicant.slug}`}
              >
                {applicant.name}
              </a>
            </Link>
            <div className='text-sm text-slate-500'>
              {applicant.name} / {applicant.city}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className='flex flex-col space-y-1 items-end'>
          <div className='text-sm text-slate-900'>
            £{applicant.aboutYou} / Year
          </div>
          <div className='flex items-center space-x-4 pl-10 md:pl-0'>
            <div className='text-sm text-slate-500 italic whitespace-nowrap'>
              {applicant.birthDate}
            </div>
            <button className='text-slate-300 hover:text-slate-400'>
              <span className='sr-only'>Bookmark</span>
              <svg
                className='w-3 h-4 fill-current'
                width='12'
                height='16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
