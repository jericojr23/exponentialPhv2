import ApplicantDetails from '../../components/data/details/ApplicantDetails';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import datasource from '../../datalayer';

const ApplicantPage = ({ applicant }) => {
  if (!applicant)
    return <LoadingSpinner customMessage='Loading applicant data ...' />;
  return <ApplicantDetails applicant={applicant} />;
};

export default ApplicantPage;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const applicant = await datasource.getApplicantBySlug({ slug });

  if (!applicant) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      applicant,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const slugs = await datasource.getApplicantsSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};