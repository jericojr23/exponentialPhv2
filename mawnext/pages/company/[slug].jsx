import CompanyDetails from '../../components/data/details/CompanyDetails';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import datasource from '../../datalayer';

const CompanyPage = ({ company, companyTasks }) => {
  if (!company)
    return <LoadingSpinner customMessage='Loading company data ...' />;
  return <CompanyDetails company={company} companyTasks={companyTasks} />;
};

export default CompanyPage;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const company = await datasource.getCompanyBySlug({ slug });
  const companyTasks = await datasource.getTasksByCompanyId({ id: company.id });

  if (!company) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      company,
      companyTasks,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const slugs = await datasource.getCompaniesSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};