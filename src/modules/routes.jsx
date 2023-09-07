import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Users/component/UserList.jsx';
import CreateUser from './Users/component/UserCreate.jsx';
import UpdateUser from './Users/component/UpdateUser.jsx';
import ViewUser from './Users/component/ViewUser.jsx';


const AppRouter = () => {
    return (
        <Router>
        <div>
         
          <main>
          
          <Routes> 
              <Route path="/" element={<UserList />} /> {/* Use element prop */}
              <Route path="/user-list" element={<UserList />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/update/:userId" element={<UpdateUser />} />
              <Route path="/view/:userId" element={<ViewUser />} />
            </Routes>
            
            
          </main>
        </div>
      </Router>
    );
};

export default AppRouter;
