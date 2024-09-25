import { FaSpinner } from 'react-icons/fa';
import style from './Loading.module.css';

function LoadingIcon() {
    return (
        <div className={style.spinnerContainer}>
            <FaSpinner className={style.spinner} />
        </div>
    );
}

export default LoadingIcon;
