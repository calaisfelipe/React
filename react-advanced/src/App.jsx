import {createPortal} from 'react-dom'
import { Stack, CircularProgress } from "@mui/material";
import { useState, Suspense } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import PortalDemo from "./components/PortalDemo";

function App() {
  const [currentUser, setCurrentUser] = 
  useState(0);
  const [showModal, setShowModal] = useState(false)

  return (
    <>

   
    {createPortal(<PortalDemo  show={showModal} />,
    document.body,'Modal')}
    
    <button onClick={() => setShowModal(!showModal)}>Show Modal</button>

      <Header currentUserId={currentUser} setCurrentUserId={setCurrentUser} />

      <Stack p={2}>
        {currentUser === 0 ? (
          <h2>Select an employee to see the posts</h2>
        ) : (
          <ErrorBoundary FallbackComponent={ErrorFallback}
          onReset={() =>{
            window.location.reload()
           
          }}
          >
            <Suspense fallback={<CircularProgress />}>
              <PostList currentUserId={currentUser} />
            </Suspense>
          </ErrorBoundary>
        )}
      </Stack>
    </>
  );
}

export default App;
