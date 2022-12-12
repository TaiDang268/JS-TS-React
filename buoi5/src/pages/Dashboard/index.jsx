import React, { useState } from 'react';
import SearchIcon from '../../assets/images/searchIcon.png';
import vector from '../../assets/images/Vector 1.png';
import styles from './styles.module.scss';
import classnames from 'classnames';

import InfoCardTest from '../../components/InfoCardTest';

const fakeData = {
    listTest: [
        { title: '1 Kiem tra danh gia nang luc ', timeTest: '1', point: 10, maxPoint: 250, starNumber: 4 },
        { title: '2 Kiem tra danh gia nang luc ', timeTest: '2', point: 20, maxPoint: 250, starNumber: 3 },
        { title: '3 Kiem tra danh gia nang luc ', timeTest: '3', point: 30, maxPoint: 250, starNumber: 5 },
        { title: '4 Kiem tra danh gia nang luc ', timeTest: '4', point: 40, maxPoint: 250, starNumber: 4 },
        { title: '5 Kiem tra danh gia nang luc ', timeTest: '5', point: 50, maxPoint: 250, starNumber: 4 },
        { title: '6 Kiem tra danh gia nang luc ', timeTest: '6', point: 60, maxPoint: 250, starNumber: 4 },
        // { title: '7 Kiem tra danh gia nang lucg ', timeTest: '', point: 70, maxPoint: 250, starNumber: 4 },
        // { title: '8 Kiem tra danh gia nang lung ', timeTest: '', point: 80, maxPoint: 250, starNumber: 4 },
    ],
};

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className={styles.containerPage}>
            <div className={styles.header}>
                <button onClick={() => setShowSidebar(true)}>click</button>
                <span>Dashboard</span>
            </div>
            <div
                className={classnames(styles.sideBar, {
                    [styles.showSideBar]: showSidebar,
                    [styles.hidden]: !showSidebar,
                })}
            >
                <div className={styles.sideBarTop}>
                    <div className={styles.image}>
                        <img
                            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/297191474_781960059801989_4585909138518852413_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=NXs5w5vZQSsAX9VJP38&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDX6nBc6_SEPCewzSzvSij3j2ZW8sfzJPg2vEh_7VntIA&oe=63987245"
                            alt=""
                        />
                        <div className={styles.textInfor}>
                            <span>User:taidang268@gmail.com</span>
                            <span>Point:2488</span>
                        </div>
                    </div>
                </div>
                <div className={styles.sideBarBottom}>
                    <button className={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div className={styles.bodyPage}>
                <div className={styles.navbar}>
                    <div className={styles.navbarWithSearch}>
                        <input type="text" placeholder="Search" />

                        <div className={styles.searchIcon}>
                            <img src={SearchIcon} alt="" />
                        </div>
                    </div>
                    <div className={styles.optionSelect}>
                        <div className={styles.textOption}>Difficult</div>
                        <div className={styles.iconOption}>
                            <img src={vector} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.listQuiz}>
                    {fakeData.listTest.map((item, index) => (
                        <div key={index} className={styles.boxQuiz}>
                            <InfoCardTest
                                title={item.title}
                                timeTest={item.timeTest}
                                point={item.point}
                                maxPoint={item.maxPoint}
                                starNumber={item.starNumber}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}></div>
            </div>
        </div>
    );
};

export default Dashboard;
