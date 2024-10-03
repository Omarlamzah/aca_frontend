import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getassociate, submetassociate } from '../../../store/quizcrud/quizcrudslice';
import Loadingv2 from '../../../component/loadingv2/loading';

const Associate = () => {
    const dispatch = useDispatch();
    const { quizzes, questions, loading, error } = useSelector((state) => state.quizcrudslice);

    useEffect(() => {
        dispatch(getassociate());
     }, [ ]);

    const [selectedQuiz, setSelectedQuiz] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const handelpostdata = async (e) => {

         e.preventDefault();
         dispatch(submetassociate({selectedQuiz,selectedQuestions}) )
         dispatch(getassociate())


      
    };

  
    return (
        <div className="container mx-auto p-8">
              <section >
                {loading ? (<Loadingv2/>): ""}
              </section>



            {quizzes && (
                <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
                    <form onSubmit={handelpostdata}>
                        <div className="mb-4">
                            <label htmlFor="quiz_id" className="block text-sm font-semibold mb-2">
                                Select Quiz Part:
                            </label>
                            <select
                                name="quiz_id"
                                id="quiz_id"
                                className="w-full p-2 border rounded focus:outline-none focus:shadow-outline-blue"
                                onChange={(e) => setSelectedQuiz(e.target.value)}
                                required
                            >
                                <option value="">-- Select Quiz --</option>
                                { quizzes.map((quiz) => (
                                    <option key={quiz.PartID} value={quiz.PartID}>
                                        {quiz.PartName}   : {quiz.questions_count}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Select Questions:</label>
                            {questions &&
                                Object.entries(questions).map(([questionText, questionGroup]) => (
                                    <div  key={questionGroup[0].QuestionID} className={`mb-2 ${questionGroup[0].ismainquestion ? " bg-green-500" : ""}` }>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="questions[]"
                                                value={questionGroup[0].QuestionID}
                                                className="form-checkbox h-5 w-5 text-blue-500"
                                                onChange={(e) => {
                                                    const questionId = e.target.value;
                                                    setSelectedQuestions((prev) =>
                                                        e.target.checked
                                                            ? [...prev, questionId]
                                                            : prev.filter((id) => id !== questionId)
                                                    );
                                                }}
                                            />
                                            <span className={`ml-2  `}>{questionText}</span>
                                            <span className={`${questionGroup[0].ismainquestion ? " bg-green-800" : ""}`}>{questionGroup[0].ismainquestion ? "this is main question" : ""}</span>
                                        </label>
                                    </div>
                                ))}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Associate;
