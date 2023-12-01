import { Component } from "react";
import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import css from './Feedback.module.css'
class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    feedback = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1
        }))
    };


    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };


    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback()
        return (
            total === 0 ? 0 : Math.round((good/total)*100)
        )
    }
    render() {
        const { good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercent = this.countPositiveFeedbackPercentage();
        return (
            <div className={css.containerStatistics} >
                <h2 className={css.title}>Please leave feedback</h2>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={this.feedback}
                />
            
                
                <Section title='Statistics'>
                    { total > 0 ?
                   <Statistics
                          good={good}
                          neutral={neutral}
                          bad={bad}
                          total={total}
                          positivePercent={positivePercent}
                        />
               
                :
                 (<Notification message="There is no feedback" />)
                    }
                     </Section>
                    
            </div>
        )
    }
}
export default Feedback;
 




// handleIncrement = (event) => {console.log("good")}
//     render() {
//         return (
//             <div className="container-statistics">
//               <h2>Please leave feedback</h2>
                // <div className="container-buttons">
                //     <button type="button" className="button-choice" onClick={this.handleIncrement}>Good</button>
                //     <button type="button" className="button-choice" onClick={() => {console.log("neutral")}}>Neutral</button>
                //     <button type="button" className="button-choice" onClick={() => {console.log("bad")}}>Bad</button>
                // </div>
//               <h2>Statistics</h2>
//                 <div className="container-statistics">
//                     <ul>
//                         <li>Good </li>
//                         <li>Neutral </li>
//                         <li>Bad </li>

//                     </ul>
//                     <span></span>
//                </div>
//         </div>
//     )
// }