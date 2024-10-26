import React from 'react';
import './ListNumber.css'; // Assuming you move styles to a separate CSS file

const ListNumber = ({employee}) => {
  return (
    <div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg blue"></div>
              <div className="ag-courses-item_title">
                      {employee.taskCounts.new} New Task

              </div>
              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg yellow"></div>
              <div className="ag-courses-item_title">
              {employee.taskCounts.active} Active Task
              </div>
              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg red"></div>
              <div className="ag-courses-item_title">
              {employee.taskCounts.completed} Complete Task
              </div>
              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div>
            </a>
          </div>
          

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg purple"></div>
              <div className="ag-courses-item_title">
              {employee.taskCounts.failed} Failed Task
              </div>
              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div>
            </a>
          </div>
        

        
        </div>
      </div>
    </div>
  );
}

export default ListNumber;
