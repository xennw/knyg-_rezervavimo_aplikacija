//import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel';

function App() {
  return (
    <div className="App">
    {!currentUser && (
				<div>
					<Router>
						<Routes>
							<Route path="/" element={<AuthScreen />} />
							<Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
							<Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
						</Routes>
					</Router>
				</div>
			)}
			{currentUser && (
				<div className="appMainPage">
					<Router>
						<Sidebar className="sidebar" logout={logout} currentUser={currentUser} />
						<div className="app-inner-mainPage">
							<Routes>
								<Route path="/" element={<HomePage currentUser={currentUser} />} />
								<Route path="/register" element={<HomePage currentUser={currentUser} />} />
								<Route path="/login" element={<HomePage currentUser={currentUser} />} />
								<Route path="/pajamos" element={<IncomeForm currentUser={currentUser} />} />
								<Route path="/islaidos" element={<NewExpense currentUser={currentUser} />} />

								{currentUser.type === 'admin' && (
									<Route path="/admin" element={<AdminPanel currentUser={currentUser} />} />
								)}
							</Routes>
						</div>
					</Router>
				</div>
			)}
     
    </div>
  );
}

export default App;
