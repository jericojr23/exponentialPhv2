import axios from './client';
import qs from 'qs';

import { applicantReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

export const getApplicants = async () => {
  const query = qs.stringify(
    {
      populate: ['profilePhoto'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/applicants?${query}`);
  const rawApplicants = res.data.data;
  const applicants = rawApplicants.map((applicant) => applicantReducer(applicant));
  return applicants;
};

export const getApplicantSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ['slug'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/applicants?${query}`);
  const rawSlugs = res.data.data;

  const slugs = rawSlugs.map((rawSlug) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const getApplicantBySlug = async ({ slug }) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['profilePhoto'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/applicants?${query}`);
  const rawApplicants = res.data.data[0];
  return applicantReducer(rawApplicants);
};

export const getApplicantsByTaskId = async ({ id }) => {
  const query = qs.stringify(
    {
      filters: {
        company: {
          id: {
            $eq: id,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/applicants?${query}`);
  const rawApplicants = res.data.data;
  const applicants = rawApplicants.map((rawApplicants) => applicantReducer(rawApplicants, false));
  return applicants;
};