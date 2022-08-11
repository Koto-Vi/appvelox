import React from 'react';
import './App.scss';
import AuthWrapper from "./pages/AuthLayout/AuthWrapper";
import LogIn from "./pages/LogIn";

function App() {
  return (
      <>
          <AuthWrapper >
              <LogIn />
          </AuthWrapper>
      </>
  );
}

export default App;