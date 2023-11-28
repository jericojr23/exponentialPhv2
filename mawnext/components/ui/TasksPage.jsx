/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import TasksList from '../data/lists/TasksList';
import SearchTaskForm from '../forms/SearchTaskForm';
import TasksPageSideBarForm from '../forms/TasksPageSideBarForm';
import TasksSortForm from '../forms/TasksSortForm';

export default function TasksPage({ tasks, taskSkills }) {
  const [displayedTasks, setDisplayedTasks] = useState(tasks);

  const [sideBarFormState, setSideBarFormState] = useState({
    taskTypes: [],
    experienceLevels: [],
    remoteOkOnly: false,
    featuredTasksOnly: false,
    baseSalaryOptions: [],
    baseSalaryBounds: [],
    selectedTags: [],
  });

  const [searchFormState, setSearchFormState] = useState('');

  const searchTasks = async (apiUrl, formsStates) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formsStates),
    });
    const foundTasks = await response.json();
    console.log(foundTasks);
    setDisplayedTasks(foundTasks);
  };

  const initialRender1 = useRef(true);
  // trigger a search whenever the sidebar form state changes
  useEffect(() => {
    if (initialRender1.current) {
      initialRender1.current = false;
    } else {
      console.log('sidebar state form changed => triggering a search');
      const formsStates = { searchFormState, sideBarFormState };
      searchTasks('api/search-tasks', formsStates);
    }
  }, [sideBarFormState]);

  const initialRender2 = useRef(true);
  // trigger a search whenever the search form state changes && length >= 3 -OR- length == 0 (implying a reset)
  useEffect(() => {
    if (initialRender2.current) {
      initialRender2.current = false;
    } else {
      console.log('search form changed && length >= 3 OR == 0 => triggering a search');
      if (searchFormState.length >= 3 || searchFormState.length === 0) {
        const formsStates = { searchFormState, sideBarFormState };
        searchTasks('api/search-tasks', formsStates);
      }
    }
  }, [searchFormState]);

  let tasksFoundMessage = `Found ${displayedTasks.length} Tasks`;
  switch (displayedTasks.length) {
    case 0: {
      tasksFoundMessage = 'No Tasks found.';
      break;
    }
    case 1: {
      tasksFoundMessage = 'Only one Task found.';
      break;
    }

    default:
      break;
  }

  const handleSkillTagDelete = (e, skillTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedTags: prevState.selectedTags.filter((tag) => skillTag !== tag),
      };
    });
  };

  return (
    <div className='flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9'>
      <TasksPageSideBarForm
        taskSkills={taskSkills}
        sideBarFormState={sideBarFormState}
        setSideBarFormState={setSideBarFormState}
        setDisplayedTasks={setDisplayedTasks}
      />
      <div className='w-full'>
        <SearchTaskForm
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
          setDisplayedTasks={setDisplayedTasks}
        />
        {/* Tasks header */}
        <div className='flex justify-between items-center mb-4'>
          {/* Number of tasks found message  */}
          <div className='text-sm text-slate-500 italic'>
            {tasksFoundMessage}
          </div>

          {/* skills tags */}
          <div>
            <div className='flex flex-wrap items-center -m-1 max-w-2xl'>
              {sideBarFormState.selectedTags &&
                sideBarFormState.selectedTags.map((skill) => (
                  <div className='m-1' key={skill}>
                    <a
                      className='text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1'
                      href='#'
                    >
                      {skill}
                      <svg
                        className='h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 8 8'
                        onClick={(e) => handleSkillTagDelete(e, skill)}
                      >
                        <path
                          strokeLinecap='round'
                          strokeWidth='1.5'
                          d='M1 1l6 6m0-6L1 7'
                        />
                      </svg>
                    </a>
                  </div>
                ))}
            </div>
          </div>

          {/* Sort */}
          <TasksSortForm
            tasks={displayedTasks}
            setDisplayedTasks={setDisplayedTasks}
          />
        </div>
        <TasksList tasks={displayedTasks} />
      </div>
    </div>
  );
}
