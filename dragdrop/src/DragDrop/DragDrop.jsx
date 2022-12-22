import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const DragDrop = () => {
  const getItem = (count) => [
    { id: "1", content: "item1" },
    { id: "2", content: "item2" },
    { id: "3", content: "item3" },
    { id: "4", content: "item4" },
  ];
  const [items, setItems] = useState(getItem);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  //   const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    background: isDragging ? "lightgreen" : "grey",

    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 10,
    width: 500,
    borderRadius: 10,
  });
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const index = result.source.index;
    const newIndex = result.destination.index;
    const newArray = reorder(items, index, newIndex);
    setItems(newArray);
    // const items = reorder(
    //   this.state.items,
    //   result.source.index,
    //   result.destination.index
    // );

    // this.setState({
    //   items,
    // });
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default DragDrop;
