"use client";
import AddTask from "./addTask";
import { ReactElement, useState, useEffect } from "react";
import getData from "./getData";

export default function TaskTable() {
  const [taskList, setTaskList] = useState<Array<ReactElement>>([]);

  // 처음에만 실행하고 2번째 인수가 비어있는 useEffect로 데이터 가져오기
  useEffect(() => {
    getData(setTaskList);
  }, []);

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Todo 목록</h1>
        <AddTask taskList={setTaskList}></AddTask>
        <ul className="mt-4 divide-y divide-gray-200">{taskList}</ul>
      </div>
    </div>
  );
}
