export const sortTasksByDatePosted = ({ tasks, ASC = true }) => {

    const sorted = [...tasks];
    sorted.sort(function (task1, task2) {
      if (task1.datePosted < task2.datePosted) return ASC ? -1 : 1;
      else if (task1.datePosted > task2.datePosted) return ASC ? 1 : -1;
      else return 0;
    });
    return sorted;
  };
  
  export const sortTasksByBaseAnnualSalary = ({ tasks, ASC = true }) => {
   
    const sorted = [...tasks];
    sorted.sort(function (task1, task2) {
      if (task1.baseAnnualSalary < task2.baseAnnualSalary) return ASC ? -1 : 1;
      else if (task1.baseAnnualSalary > task2.baseAnnualSalary) return ASC ? 1 : -1;
      else return 0;
    });
    return sorted;
  };
  
  export const sortTasksByCompanyName = ({ tasks }) => {

    const sorted = [...tasks];
    sorted.sort(function (task1, task2) {
      if (task1.company.name < task2.company.name) return -1;
      else if (task1.company.name > task2.company.name) return 1;
      else return 0;
    });
    return sorted;
  };
  