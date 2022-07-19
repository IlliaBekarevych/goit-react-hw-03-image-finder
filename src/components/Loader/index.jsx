import { ThreeDots } from 'react-loader-spinner';
import i from './index.module.css';
function Loader() {
  return (
    <div className={i.Loader}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
