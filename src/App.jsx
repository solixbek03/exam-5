import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Channel from './pages/Channel';
import Home from './pages/Home';
import Video from './pages/Video';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/channel'} element={<Channel/>}/>
        <Route path={'/video'} element={<Video/>}/>
        <Route path={'*'} element={<Navigate to={"/"} />}/>
      </Routes>
    </>
  );
}

export default App;
