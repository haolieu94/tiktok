import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d49e17ac202ccbf31a6f9a7e8c69836~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=19185&refresh_token=b164a439269b54b8dade1febb3bed767&x-expires=1731826800&x-signature=lzKZhzWG1GAc1eICh%2B309ynwqt8%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>ABCDEF</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ABCDEF</span>
            </div>
        </div>
    );
}

export default AccountItem;
