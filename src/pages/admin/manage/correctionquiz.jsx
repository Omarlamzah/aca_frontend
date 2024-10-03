import { BsFillTrashFill } from "react-icons/bs"; 
import { FaEdit } from "react-icons/fa"; 
import { BiLoader } from "react-icons/bi"; 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteanswer, getanswers ,submitanswer} from '../../../store/correctanswers/correctanswersslice';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Loadingv2 from '../../../component/loadingv2/loading';
import Swal from 'sweetalert2';


const Correctionquiz = () => {
    const dispatch = useDispatch();
    const [answerupdateid,setanswerupdateid] = useState(0)
    const [answerupdatetext,setanswerupdatetext] = useState("")
    const [answerupdatetiscorrect,setanswerupdatetiscorrect] = useState(false)


    const [open, setOpen] = useState(false);
     const onOpenModal = (id,text,iscorrect ) => {
         console.log(id,text,iscorrect);
         setanswerupdateid(id)  ; 
         setanswerupdatetext(text)  ; 
         setanswerupdatetiscorrect(iscorrect)  ; 
          setOpen(true);};
         const onCloseModal = () => {setOpen(false); };


   


    const { quizzesanswers, loading, error, msg } = useSelector((state) => state.correctanswersslice);

    useEffect(() => {
        console.log(quizzesanswers); // Check if quizzesanswers is defined

        dispatch(getanswers());
    }, [dispatch]);

    const handleUpdateAnswer = async () => {
        // Make an API call to update the answer
        console.log(answerupdateid, answerupdatetext, answerupdatetiscorrect)
          dispatch(  submitanswer({answerupdateid, answerupdatetext, answerupdatetiscorrect}))
          
       
    };



    const handeldeleteanser =(idanswer)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: 'you want to delte answer!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
                 dispatch(deleteanswer(idanswer))

             }
          });
    }

    return (
        <div className="p-4 h-screen overflow-scroll">
            <h1 className="text-3xl font-bold mb-4">Correction Quiz</h1>
            {loading ? <Loadingv2 /> : null}
            {quizzesanswers &&
                quizzesanswers.map((quiz) => (
                    <div key={quiz.PartID} className="mb-6">
                        <h2 className="text-2xl font-semibold w-full text-center bg-yellow-400">{quiz.PartName}</h2>
                        {quiz.questions.map((question) => (
                            <div key={question.QuestionID} className="mb-4">
                                <h3 className="text-xl font-medium">{question.QuestionText}</h3>
                                {question.answers.map((answer) => (
                                    <div key={answer.AnswerID} className="mb-2">
                                     <div className=" flex gap-3 ">   <p>{answer.AnswerText}</p>
                                        <span >{answer.IsCorrect ? (<span className=" bg-green-500 rounded-2xl p-1">iscorrect</span>)  : ("")}</span></div>
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                            onClick={() =>
                                                onOpenModal(
                                                    answer.AnswerID,
                                                    answer.AnswerText,
                                                    answer.IsCorrect
                                                )
                                            }
                                        >
                                           <FaEdit /> 
                                        </button>
                                        <button  className="bg-red-500 ml-2 text-white px-4 py-2 rounded" onClick={()=>{handeldeleteanser( answer.AnswerID)}}> <BsFillTrashFill /></button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

            <Modal open={open} onClose={onCloseModal} center>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Update Answer</h2>
                    <textarea
                                        
                        className="border p-2 mb-2"
                        value={answerupdatetext}
                        onChange={(e) => {
                            setanswerupdatetext(e.target.value);
                        }} cols="30" rows="4"></textarea>

                    <label className="flex items-center">
                        <input
                            className="mr-2"
                            checked={answerupdatetiscorrect }
                            onChange={(e) => {
                                setanswerupdatetiscorrect(e.target.checked);
                            }}
                            type="checkbox"
                        />
                        Is Correct
                    </label>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={handleUpdateAnswer}
                    >  { loading ? <BiLoader className=" animate-spin w-6 h-6" /> : <span>  Update Answer</span>}
                              
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Correctionquiz;