import styles from './styles.module.scss';

const ExamFinish = () => {
    return (
        <div className={styles.ExamFinishContainer}>
            <div className={styles.BodyPage}>
                <div className={styles.QuestionTilte}>
                    <span>Kiểm tra an toàn bảo mật thông tin lần 2 </span>
                </div>
                <div className={styles.Infor}>
                    <div className={styles.InforPoint}>
                        <span>Số câu trả lời đúng :12</span>
                        <span>Số câu trả lời sai: 3</span>
                        <span>Số câu chưa trả lời đúng:1</span>
                        <span>Tổng số câu hỏi:16</span>
                    </div>
                    <div className={styles.TotalPoint}>
                        <span className={styles.TotalPointText}>Điểm số :120/160</span>
                    </div>
                </div>
                <div className={styles.DashBoard}>
                    <button className={styles.DashBoardBtn}>DASHBOARD</button>
                </div>
            </div>
        </div>
    );
};
export default ExamFinish;
