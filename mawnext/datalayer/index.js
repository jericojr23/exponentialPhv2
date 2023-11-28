// import data from strapi
let datasource = {};

import * as strapiTaskAPI from './strapi/task';
import * as strapiCompanyAPI from './strapi/company';
if (process.env.DATALAYER_ENGINE === 'strapi')
    datasource = { ...strapiTaskAPI, ...strapiCompanyAPI };

export default datasource;