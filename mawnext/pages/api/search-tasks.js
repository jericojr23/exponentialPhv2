import datasource from '../../datalayer';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function handler(req, res) {
  const { searchFormState, sideBarFormState } = req.body;

  const minBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.min(...sideBarFormState.baseSalaryBounds)
      : 0;

  const maxBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.max(...sideBarFormState.baseSalaryBounds)
      : 1000000;

  const taskTypes = sideBarFormState.taskTypes.map((taskType) =>
    capitalizeFirstLetter(taskType)
  );

  const experienceLevels = sideBarFormState.experienceLevels.map(
    (experienceLevel) => capitalizeFirstLetter(experienceLevel)
  );

  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
    minBaseSalary,
    maxBaseSalary,
    taskTypes,
    experienceLevels,
  };

  console.log(query);
  const tasks = await datasource.searchTasks(query);
  res.status(200).json(tasks);
}