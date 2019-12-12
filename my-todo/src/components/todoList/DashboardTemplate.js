import React from 'react';

const DashboardTemplate = ({form, todoList}) => {
  return (
    <div>
        <div>
        폼영역
        {form}
        </div>
        <div>
        리스트영역
        {todoList}
        </div>
    </div>
  )
}

export default DashboardTemplate;