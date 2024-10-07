import React from 'react'

interface ProkerSectionProps {
    prokerList: string[],
    prokerDetail: {
        title: string,
        description: string,
        image: string,
        listKegiatan: string[]
    }
}

interface ProkerBadgeProps {
    data: {
        nama_proker: string
    }
}

const ProkerBadge: React.FC<ProkerBadgeProps> = ({ data }) => {
    return (
        <div>
            <a className='p-3 block border border-pr200 text-white my-2 mx-2 rounded' href="/proker">{data.nama_proker}</a>
        </div>
    )
}

const ProkerSection: React.FC<ProkerSectionProps> = ({ prokerList, prokerDetail }) => {
    return (
        <div>
            <section id='work-program-section'>
                <div className='w-full text-white mx-auto flex flex-col items-center bg-pr800 pt-20'>
                    <h2 className='text-5xl font-bold mb-5'>Program Kerja GenBI Jember</h2>
                    <p className='text-pr200 w-2/3 text-center mb-5'>GenBI Jember aktif dalam berbagai program yang mendukung pengembangan diri dan kontribusi sosial. Dari kegiatan sosial hingga pelatihan leadership, setiap program dirancang untuk mendorong anggotanya menjadi agen perubahan bagi masyarakat.</p>
                    <div className='flex flex-wrap justify-center max-w-screen-xl mx-auto mb-10'>
                        {prokerList.map((proker) => (
                            <ProkerBadge key={proker} data={{ nama_proker: proker }} />
                        ))}
                    </div>
                    <div className='flex flex-wrap w-full justify-between max-w-screen-xl mx-auto mb-10'>
                        <div className='w-3/5 flex flex-col justify-center'>
                            <h2 className='text-5xl font-bold mb-5'>
                                {prokerDetail['title']}
                            </h2>
                            <p className='text-white pr-24 mb-5'>
                                {prokerDetail['description']}
                            </p>
                            <div className='flex w-full'>
                                <ul className='w-full grid grid-cols-2 gap-4'>
                                    {prokerDetail['listKegiatan'].map((data) => (
                                        <li className='my-1 flex items-center'>
                                            <img src="images/icon/check-icon.png" alt="" />
                                            <p className='ml-2'>{data}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <img className='w-full' src={prokerDetail['image']} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProkerSection