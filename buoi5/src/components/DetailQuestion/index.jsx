import React from 'react';
import styles from './styles.module.scss';

const DetailQuestion = ({ data }) => {
    // const { question, answerA, answerB, answerC, answerD, index } = props;
    return (
        <div className={styles.QuestionContainer}>
            <div className={styles.Question}>{`Câu ${data.id}: ` + data.question}</div>
            <div className={styles.Answer}>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{data.answerA}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{data.answerB}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{data.answerC}</span>
                </div>
                <div className={styles.AnswerItem}>
                    <input type="checkbox" name="" id="" />
                    <span>{data.answerD}</span>
                </div>
            </div>
        </div>
    );
};
export default DetailQuestion;
