import React from 'react';
import styles from './styles.module.scss';

const DetailQuestion = (props) => {
    const { question, answerA, answerB, answerC, answerD, index } = props;
    return (
        <div className={styles.QuestionContainer}>
            <div className={styles.Question}>{`Câu ${index}: ` + question}</div>
            <div className={styles.Answer}>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{answerA}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{answerB}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{answerC}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{answerD}</span>
                </div>
            </div>
        </div>
    );
};
export default DetailQuestion;
