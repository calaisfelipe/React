
import './App.css'
import SearchProfile from './components/SearchProfile'
import GlobalTheme from './Themes/GlobalTheme'
import ProfileView from './Profile/ProfileView'

function App() {
 
  

  return (
    <div className="App">
      <GlobalTheme />
      <SearchProfile />
      <ProfileView />

    </div>
  )
}

export default App
