import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';
function Routes() {
  return (
    <BrowserRouter>
      <RouterDOM>
        <Route path="/" element={<Login />} />
        <Route path="/agenda-de-churrascos" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </RouterDOM>
    </BrowserRouter>
  );
}
export default Routes;
