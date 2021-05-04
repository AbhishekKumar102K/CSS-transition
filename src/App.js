import './App.css';

function App() {

  const checkList = [
    {
      name: 'Personal Profiles',
      checked: false,
      price: 2300,
      time: '0s'
    },
    {
      name: 'News Feed or User Wall',
      checked: true,
      price: 1900,
      time: '0.5s'
    },
    {
      name: 'Capture Images',
      checked: false,
      price: 1550,
      time: '0s'
    },
    {
      name: 'Live Chat',
      checked: true,
      price: 2160,
      time: '1.5s'
    },
    {
      name: 'Push Notifications',
      checked: true,
      price: 5600,
      time: '2s'
    },
    {
      name: 'Maps',
      checked: true,
      price: 4800,
      time: '2.5s'
    },
    {
      name: 'Image Editing',
      checked: false,
      price: 2880,
      time: 0
    },
    {
      name: 'Group Chat',
      checked: false,
      price: 2160,
      time: 0
    },
    {
      name: 'Simple Inbox',
      checked: true,
      price: 360,
      time: '3.5s'
    },
    {
      name: 'Payments',
      checked: false,
      price: 5400,
      time: 0
    }
  ]

  return (
    <div className="app">
      <div className='animation-container'>
        <div className='modal-content'>
          <div className='modal-content-text'>
            <div className='row-1'>
              <span className='black-text'>Estimate</span>
              <span className='grey-text'>your</span>
            </div>
            <div className='row-2'>
              <span className='grey-text'>project</span>
              <span className='black-text'>cost</span>
            </div>
            <div className='start-now-button'>
              Start now
            </div>
          </div>
        </div>

        <div className = "scroll-box">
          {checkList.map((item)=>{
            return (
              <div className = "checklist-row">
                <div className = {`checkbox ${item.checked ? 'checked': ''}`}
                     style = {{
                       animationDelay: item.checked?item.time:'0',
                       animationDuration: item.checked?(8-item.time):'0'
                    }}
                >
                   <div className='checkmark'></div>
                </div>
                <div 
                    className={`checklist-name ${item.checked ? 'checked-color': ''}`}
                    style = {{
                      animationDelay: item.checked?item.time:'0',
                      animationDuration: item.checked?(8-item.time):'0'
                  }}>
                  {item.name}
                 </div>

                <div className={`checklist-price ${item.checked ? 'checked-color': ''}`}
                    style = {{
                      animationDelay: item.checked?item.time:'0',
                      animationDuration: item.checked?(8-item.time):'0'
                  }}
                >
                  ${item.price}</div>
             </div>
            )
          })}
        </div>  

        <div className = "mask"></div>
      </div>
    </div>
  );
}

export default App;
