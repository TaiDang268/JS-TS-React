import React from 'react';
import styles from './styles.module.scss';
import { images } from '../../assets';

const InfoCardTest = (props) => {
    const { title, timeTest, point, maxPoint, starNumber } = props;

    return (
        <div className={styles.containerCard}>
            <span className={styles.titleCard}>{title}</span>
            <div className="d-flex mt-10">
                <div className="d-flex-start-center flex-4">
                    <img src={images.clockIcon} width={26} height={31} alt={images.clockIcon} />
                    <span className={styles.infoLine}>{timeTest + ' phút'}</span>
                </div>
                <div className="d-flex-start-center flex-6">
                    <img src={images.pointIcon} width={24} height={31} alt={images.pointIcon} />
                    <span className={styles.infoLine}>{point + '/' + maxPoint}</span>
                </div>
            </div>
            <div className="d-flex-start-center mt-20">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={starNumber >= item ? images.starActiveIcon : images.starUnActiveIcon}
                            alt=""
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default InfoCardTest;
