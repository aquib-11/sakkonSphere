function QuizSubmissionDialog({ answers }) {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-8 shadow-xl rounded-2xl bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-red-100 hover:text-red-500 transition-all duration-300">
                            ✕
                        </button>
                    </form>
                    <div className="header text-center">
                        <h3 className="font-extrabold text-4xl mb-4 text-[var(--primary)] animate-pulse">
                            🎉 Quiz Completed! 🎉
                        </h3>
                        <h2 className="text-2xl mb-6">Your style: <span className="text-[var(--grey--900)] font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Anxious</span></h2>
                    </div>

                    <p className="text-xl font-semibold mb-6 text-center text-gray-700">
                        Here are your selected answers:
                    </p>
                    <ul className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
                        {answers.map((answer, index) => (
                            <li key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[var(--primary)]">
                                <strong className="block text-xl mb-3 text-[var(--primary)]">
                                    Question {index + 1}:
                                </strong>
                                <h4 className="mb-3 text-lg text-gray-800">{answer.question}</h4>
                                <p className="flex items-center">
                                    <strong className="text-gray-700 mr-2">Your Answer:</strong>
                                    <span className="text-gray-900 bg-blue-100 px-3 py-1 rounded-full">{answer.selectedOption}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </dialog>
        </div>
    );
}

export default QuizSubmissionDialog;
