import style from './Notification.module.css';

const Notification = ({ message, color, show }) => {
    return (
        show && (
            <div
                className={style.notification}
                style={{ backgroundColor: `${color}` }}
            >
                <p>{message}</p>
            </div>
        )
    );
};

export default Notification;
