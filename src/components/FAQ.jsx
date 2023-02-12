import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"


const FAQ = ({question, answer}) => {

  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const showingMechanism = () => {
    setIsAnswerShowing(prev => !prev)
  }
  return (
    <article className="faq">
        <div>
            <h4>{question}</h4>
            <button className="faq__icon" onClick = {showingMechanism}>
                {
                  isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
            </div>
                {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ