import {Route, Routes} from 'react-router-dom';
import {Page} from './page';

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/num/:param" element={<Page />} />
      </Routes>
    </>
  );
};
