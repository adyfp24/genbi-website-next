import React from 'react'

const FaqSection: React.FC = () => {
    return (
        <>
            <section className="p-4 bg-gray-50 pt-20 pb-56">
                <div className="max-w-7xl mx-auto flex">
                    <div className='w-1/3'>
                        <h2 className="text-4xl text-pr900 font-bold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
                        <p className="text-gray-600 mb-6 mr-10">
                            Punya pertanyaan tentang Beasiswa Bank Indonesia atau GenBI Jember? Temukan jawabannya di sini!
                        </p>
                    </div>

                    <div className="space-y-4 w-2/3 ml-10">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleDropdownFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="w-6 h-6" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6" />
                                    )}
                                </div>
                                {openFaqIndex === index && (
                                    <p className="text-gray-600 mt-3">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqSection