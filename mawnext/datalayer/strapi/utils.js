import date from 'date-and-time';
import { marked } from 'marked';

const assetsBaseUrl = process.env.STRAPI_ASSETS_BASE_URL;

export const richTextReducer = (rawRichtext) => {
  const parsedRichText = marked.parse(rawRichtext);
  let styledRichText = parsedRichText.replace(
    '<ul>',
    "<ul style='list-style-type: circle;'>"
  );
  return styledRichText;
};

export const imageReducer = (imageField) => {
  const fields = imageField.data.attributes;
  return {
    url: `${assetsBaseUrl}${fields.url}`,
    alt: `${fields.caption}`,
    height: fields.height,
    width: fields.width,
    contentType: fields.mime,
  };
};

export const companyReducer = (rawCompany) => {
  let company = { ...rawCompany.attributes };
  company.id = rawCompany.id;
  company.logo = imageReducer(company.logo);
  company.coverImage = imageReducer(company.coverImage);
  return company;
};

export const appplicantReducer = (rawApplicants) => {
  let applicant = { ...rawApplicants.attributes };
  applicant.id = rawApplicants.id;
  applicant.logo = imageReducer(applicant.profilePhoto);
  return applicant;
};

export const dateReducer = (dateStr) => {
  const dateObj = date.parse(dateStr.split('T')[0], 'YYYY-MM-DD');
  return dateObj.toDateString();
};

export const skillsReducer = (tagsField) => {
  if (!tagsField) return [];
  let tags = [];
  tagsField.data.map((rawTag) => {
    const tag = rawTag.attributes.name;
    tags.push(tag);
  });
  return tags;
};

export const taskReducer = (rawTask, parseRelatedTasks = true) => {
  let task = { ...rawTask.attributes };
  task.id = rawTask.id;

  task.datePosted = dateReducer(task.datePosted);
  task.company = companyReducer(task.company.data);
  task.skills = skillsReducer(task.skillsTags);
  task.aboutYou = richTextReducer(task.aboutYou);
  task.remunerationPackage = richTextReducer(task.remunerationPackage);
  task.taskResponsibilities = richTextReducer(task.taskResponsibilities);
  task.taskDescription = richTextReducer(task.taskDescription);

  const relatedTasks = task.relatedTasks || [];

  if (!parseRelatedTasks) {
    task.relatedTasks = [];
  } else {
    task.relatedTasks = relatedTasks.data.map((relatedTask) => {
      return taskReducer(relatedTask, false);
    });
  }

  return task;
};
