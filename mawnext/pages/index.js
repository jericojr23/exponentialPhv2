import datasource from '../datalayer';
import TasksPage from '../components/ui/TasksPage';

export default function Index({ tasks, taskSkills }) {
  return <TasksPage tasks={tasks} taskSkills={taskSkills} />;
}

export const getStaticProps = async (ctx) => {
  const tasks = await datasource.getTasks();
  const taskSkills = await datasource.getTaskSkills();

  return {
    props: {
      tasks,
      taskSkills,
    },
    revalidate: 5,
  };
};
