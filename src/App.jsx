import { useState, useEffect } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialData = {
  Todo: [],
  "In Progress": [],
  Done: [],
};

function App() {
  const [columns, setColumns] = useState(initialData);
  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("columns"));
    if (saved) setColumns(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      text: input,
    };

    setColumns({
      ...columns,
      Todo: [...columns.Todo, newTask],
    });

    setInput("");
  };

  const deleteTask = (colName, index) => {
    const newTasks = [...columns[colName]];
    newTasks.splice(index, 1);

    setColumns({
      ...columns,
      [colName]: newTasks,
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const draggedItem = sourceCol[source.index];

    // Remove from source
    const newSource = [...sourceCol];
    newSource.splice(source.index, 1);

    // Add to destination
    const newDest = [...destCol];
    newDest.splice(destination.index, 0, draggedItem);

    setColumns({
      ...columns,
      [source.droppableId]: newSource,
      [destination.droppableId]: newDest,
    });
  };

  return (
    <div className="app">
      <h1>🚀 DevOps Task Tracker</h1>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {Object.keys(columns).map((colName) => (
            <Droppable droppableId={colName} key={colName}>
              {(provided) => (
                <div
                  className="column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>
                    {colName} ({columns[colName].length})
                  </h3>

                  {columns[colName].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.text}
                          <button
                            onClick={() => deleteTask(colName, index)}
                          >
                            ❌
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
