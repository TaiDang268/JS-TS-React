import styles from './styles.module.scss';
import DetailQuestion from '../../components/DetailQuestion';
const Exam = () => {
    return (
        <div className={styles.ExamContainer}>
            <div className={styles.BodyExam}>
                <div className={styles.BodyExamTop}>
                    <span className={styles.TextQuestion}>Kiểm tra an toàn bảo mật thông tin lần 2</span>
                    <span>Còn lại :14 phút 22 giây</span>
                </div>

                <div className={styles.BodyExamBottom}>
                    <div className={styles.QuestionItem}>
                        <DetailQuestion
                            question="dsdsdvb"
                            answerA="sdasd"
                            answerB="asdas"
                            answerC="asdas"
                            answerD="asdas"
                            index={1}
                        />
                    </div>
                    <div className={styles.TranferQuestiom}></div>
                </div>
            </div>

            <div className={styles.BodyExamRight}>
                <div className={styles.QuestionNumber}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
                        <button key={index}>{item}</button>
                    ))}
                </div>
                <div className={styles.SubmitContainer}>
                    <button className={styles.SubmitBtn}>Nộp bài</button>
                </div>
            </div>
        </div>
    );
};
export default Exam;
