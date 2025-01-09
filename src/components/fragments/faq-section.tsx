import React, { useState } from 'react';
import { useFaq } from '@/context/faqContext';
import Spinner from '../elements/spinner';
import dynamic from 'next/dynamic';
const AnimationOnScroll = dynamic(
    () => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
);


const FaqSection: React.FC = () => {
    const { faqs, loading, error } = useFaq();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const handleDropdownFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Debugging log
    console.log({ faqs, loading, error });

    return (
        <section className="bg-gray-50 pt-20 pb-70 md:pb-56">
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className="max-w-7xl px-5 md:px-12 mx-auto flex flex-col md:flex-row">
                    <div className='w-full md:w-1/3'>
                        <h2 className="text-4xl text-pr900 font-medium md:font-semibold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
                        <p className="text-gray-600 mb-6 mr-10">
                            Punya pertanyaan tentang Beasiswa Bank Indonesia atau GenBI Jember? Temukan jawabannya di sini!
                        </p>
                    </div>

                    <div className="space-y-4 w-full md:w-2/3 md:ml-10">
                        {loading && <Spinner />}
                        {error && <p>Error: {error}</p>}
                        {faqs.length === 0 && !loading && <p>No FAQs available.</p>}
                        {faqs.map((faq, index) => (
                            <div key={faq.id} className="bg-white p-4 rounded-lg">
                                <div
                                    className="flex justify-between items-center cursor-pointer w-full"
                                    onClick={() => handleDropdownFaq(index)}
                                >
                                    <span className="w-4/5 font-medium text-gray-900">{faq.question}</span>
                                    <div className="w-1/5 flex justify-end">
                                    {openFaqIndex === index ? (
                                        <svg
                                            className=" w-6 h-6 md:w-6 md:h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                stroke="#98A2B3"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="ms-5 w-6 h-6 md:w-6 md:h-6"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                stroke="#98A2B3"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                    </div>
                                </div>
                                {openFaqIndex === index && (
                                    <p className="text-gray-600 mt-3">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </AnimationOnScroll>
        </section>
    );
};

export default FaqSection;
