import styles from './styles.module.scss';
import DetailQuestion from '../../components/DetailQuestion';
// import fakeExam from '../../FakeData/quiz';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const listExams = [
    {
        id: 1,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 1,
        answerB: 2,
        answerC: 3,
        answerD: 4,
    },
    {
        id: 2,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 5,
        answerB: 6,
        answerC: 7,
        answerD: 8,
    },
    {
        id: 3,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 9,
        answerB: 10,
        answerC: 11,
        answerD: 12,
    },
    {
        id: 4,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 13,
        answerB: 14,
        answerC: 15,
        answerD: 16,
    },
    {
        id: 5,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 17,
        answerB: 18,
        answerC: 18,
        answerD: 20,
    },
    {
        id: 6,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 21,
        answerB: 22,
        answerC: 23,
        answerD: 24,
    },
    {
        id: 7,
        question: 'Nhân viên chính thức của công ty Amela được',
        answerA: 25,
        answerB: 26,
        answerC: 27,
        answerD: 28,
    },
];
const Exam = () => {
    const navigate = useNavigate();
    const lengthQuestion = listExams.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const currentQuizData = listExams[currentQuestion];
    const handleBeforeBtn = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleAfterBtn = () => {
        if (currentQuestion < lengthQuestion - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentQuestion === lengthQuestion - 1) setCurrentQuestion(0);
    };
    const handleClickQuestionNumber = (e) => {
        let idQuestion = e.target.id;
        setCurrentQuestion(idQuestion - 1);
    };
    const handleClickSubmit = () => {
        navigate('/examfinish');
    };
    

    return (
        <div className={styles.ExamContainer}>
            <div className={styles.BodyExam}>
                <div className={styles.BodyExamTop}>
                    <span className={styles.TextQuestion}>Kiểm tra an toàn bảo mật thông tin lần 2</span>
                    <span className={styles.TextTime}>Còn lại :14 phút 22 giây</span>
                    <div className={styles.CountDown}></div>
                </div>

                <div className={styles.BodyExamBottom}>
                    <div className={styles.QuestionItem}>
                        <DetailQuestion data={currentQuizData} />
                    </div>
                    <div className={styles.TranferQuestion}>
                        <button onClick={handleBeforeBtn} className={styles.BeforeQuestion}>
                            CÂU TRƯỚC
                        </button>
                        <button onClick={handleAfterBtn} className={styles.AfterQuestion}>
                            CÂU SAU
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.BodyExamRight}>
                <div className={styles.QuestionNumber}>
                    {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
                        <button key={index} onClick={handleClickQuestionNumber()}>
                            {item}
                        </button>
                    ))} */}
                    {listExams.map((item) => (
                        <button
                            className={item.id === currentQuestion + 1 ? styles.ActiveColor : ''}
                            key={item.id}
                            id={item.id}
                            onClick={handleClickQuestionNumber}
                        >
                            {item.id}
                        </button>
                    ))}
                </div>
                <div className={styles.SubmitContainer}>
                    <button className={styles.SubmitBtn} onClick={handleClickSubmit}>
                        Nộp bài
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Exam;
