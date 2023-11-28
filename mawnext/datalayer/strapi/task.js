//task.js
import axios from './client';
import qs from 'qs';
import { taskReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

export const getTasksSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ['slug'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/tasks?${query}`);
  const rawSlugs = res.data.data;
  const slugs = rawSlugs.map((rawSlug) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const getTaskBySlug = async ({ slug }) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: [
        'company',
        'company.logo',
        'company.coverImage',
        'relatedTasks',
        'relatedTasks.company',
        'relatedTasks.company.logo',
        'relatedTasks.company.coverImage',
        'skillsTags',
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/tasks?${query}`);
  const rawTask = res.data.data[0];
  return taskReducer(rawTask);
};

export const getTasksByCompanyId = async ({ id }) => {
  const query = qs.stringify(
    {
      filters: {
        company: {
          id: {
            $eq: id,
          },
        },
      },
      populate: ['company', 'company.logo', 'company.coverImage', 'skillsTags'],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/tasks?${query}`);
  const rawTasks = res.data.data;
  const tasks = rawTasks.map((rawTask) => taskReducer(rawTask, false));
  return tasks;
};

export const getTasks = async ({ page = 1, pageSize = 100 } = {}) => {
  const query = qs.stringify(
    {
      populate: ['company', 'company.logo', 'company.coverImage', 'skillsTags'],
      pagination: {
        page,
        pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/tasks?${query}`);
  const rawTasks = res.data.data;
  const tasks = rawTasks.map((rawTask) => taskReducer(rawTask, false));
  return tasks;
};

export const searchTasks = async (query) => {
  const strapiQuery = {
    populate: ['company', 'company.logo', 'company.coverImage', 'skillsTags'],
    filters: {},
  };

  if (query.remoteOkOnly) strapiQuery['filters']['remoteOk'] = { $eq: true };
  if (query.featuredTasksOnly) strapiQuery['filters']['featuredTask'] = { $eq: true };

  strapiQuery['filters']['baseAnnualSalary'] = {
    $gte: query.minBaseSalary,
    $lte: query.maxBaseSalary,
  };

  strapiQuery['filters']['taskType'] = { $in: query.taskTypes };
  strapiQuery['filters']['experienceLevel'] = { $in: query.experienceLevels };

  if (query.selectedTags && query.selectedTags.length)
    strapiQuery['filters']['skillsTags'] = {
      name: { $in: query.selectedTags },
    };

  if (query.searchBarText) {
    const searchFields = [
      'title',
      'taskCategory',
      'taskType',
      'taskDescription',
      'aboutYou',
      'taskResponsibilities',
      'remunerationPackage',
      'skillsTags.name',
      'company.name',
      'company.city',
    ];

    strapiQuery['filters']['$or'] = searchFields.map((field) => {
      const searchField = {};
      if (!field.includes('.')) {
        searchField[field] = { $containsi: query.searchBarText };
      } else {
        const [level1, level2] = field.split('.');
        const nestedSearchField = {};
        nestedSearchField[level2] = { $containsi: query.searchBarText };
        searchField[level1] = nestedSearchField;
      }
      return searchField;
    });
  }

  const strapiQueryStr = qs.stringify(strapiQuery, { encodeValuesOnly: true });
  const res = await axios.get(`${apiUrl}/tasks?${strapiQueryStr}`);
  const rawTasks = res.data.data;
  const tasks = rawTasks.map((rawTask) => taskReducer(rawTask, false));
  return tasks;
};

export async function getTaskSkills() {
  const query = qs.stringify(
    {
      fields: ['name'],
      filters: {
        tagType: {
          $eq: 'skill',
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/tags?${query}`);
  const rawTags = res.data.data;
  const tags = rawTags.map((rawTag) => {
    return rawTag.attributes.name;
  });
  return tags;
}
