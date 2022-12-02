import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal,setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash",id:1},
    {title: "bowser's live stream",id:2},
    {title: "race on moo moo farm",id:3},
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => { 
      return prevEvents.filter((event) => {
        return id !== event.id
    })
  })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)

  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className='App'>
      <Title title="Events in Your Area" subtitle={subtitle}/>

      <Title title="another title" subtitle="nother subtitle"/>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>    
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>10% off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>    

    </div>
  );
}

export default App;
