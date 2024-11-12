import React, { useState } from 'react';
import { useFaq } from '@/context/faqContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Spinner from '../elements/spinner';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const FaqSection: React.FC = () => {
    const { faqs, loading, error } = useFaq();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const handleDropdownFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Debugging log
    console.log({ faqs, loading, error });

    return (
        <section className="p-4 bg-gray-50 pt-20 pb-56">
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className="max-w-7xl mx-auto flex">
                    <div className='w-1/3'>
                        <h2 className="text-4xl text-pr900 font-bold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
                        <p className="text-gray-600 mb-6 mr-10">
                            Punya pertanyaan tentang Beasiswa Bank Indonesia atau GenBI Jember? Temukan jawabannya di sini!
                        </p>
                    </div>

                    <div className="space-y-4 w-2/3 ml-10">
                        {loading && <Spinner />}
                        {error && <p>Error: {error}</p>}
                        {faqs.length === 0 && !loading && <p>No FAQs available.</p>}
                        {faqs.map((faq, index) => (
                            <div key={faq.id} className="bg-white p-4 rounded-lg">
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
            </AnimationOnScroll>
        </section>
    );
};

export default FaqSection;
