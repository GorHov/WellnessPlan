import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import Calendar from "./components/Calendar/Calendar";
import ChartDougnut from "./components/ChartDougnut/ChartDougnut";


function App() {
  const mainData = useSelector((state) => state.MainReducer.data);
  const hasChanges = useSelector((state) => state.MainReducer.hasChanges);
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [event, setEvent] = useState([]);
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(0);
const nodeRef = useRef(null);

  useEffect(() => {
    let arr = [];
    mainData.map((i) => {
      if (i.categories.length) {
        i.categories.map((j) => {
          arr.push(j);
        });
      }
    });
    setEvent(arr);
  }, [hasChanges]);

  useEffect(() => {
    if (event.length > 0) {
      setCompleted(
        event.filter((i) => {
          return i.status === 1;
        })
      );
    }
  }, [event.length]);

  useEffect(() => {
    if( event.length && completed.length){
       setPercent((completed.length * 100) / event.length)
      }
  },[completed.length])

  return (
    <>
      <p>2021 Wellness Plan</p>
      <div className="App">
        {showButton && (
          <div className="sm-conteiner">
            <button className="button_sh" onClick={() => setShowMessage(true)}>
              Show
            </button>
          </div>
        )}
        <CSSTransition
          in={showMessage}
          nodeRef={nodeRef}
          timeout={300}
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <div className="conteiner">
            <div className="header">
              <div>
                <span className="bold-text">Your Progress</span>
                <span className="grey-text">3 steps to complete</span>
              </div>
              <button
                className="button_sh"
                onClick={() => setShowMessage(false)}
              >
                Hide
              </button>
            </div>
            <div className="content">
              <div className="class-1">
                <div ref={nodeRef} onClose={() => setShowMessage(false)}>
                {percent && <ChartDougnut percent={percent} event={event} completed={completed}/>}
                </div>
              </div>
              <div className="class-2">
                <div className="calendar">
                  <Calendar categories={mainData} event={event} />
                </div>
                <div className="category-item">
                  {event.map((item) => {
                    return <CategoryItem category={item} key={item.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
