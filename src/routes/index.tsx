import { BrowserRouter, Routes as RouterDOM, Route } from 'react-router-dom';

import { Home, Login, NotFound } from 'pages';

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
