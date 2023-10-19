import { ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

function Registro({ registro }) {
    return (
        <div className="flex gap-4 p-4 items-start">
            {/* <img className="rounded-full" src={registro.user.profileImage} alt={registro.user.name} width="40" /> */}
            <div>
                <a>{registro.paraclinicos}</a>
                <a>{registro.paraclinicos}</a>
                <a>{registro.paraclinicos}</a>
                <a>{registro.paraclinicos}</a>
                <a>{registro.paraclinicos}</a>
                <a>{registro.paraclinicos}</a>
                {/* <a className="mr-2 text-black" href="#">{registro.user.username}</a>
                <span className="text-gray-600">· {registro.creationDate}</span>

                <p className="mt-4">{registro.text}</p>

                <div className='mt-4 flex justify-between'>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-sky-500'>
                        <ChatBubbleOvalLeftIcon className="h-5 w-5 text-gray" />
                        <span>{registro.replays}</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>{registro.reregistros}</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>20</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>20</span>
                    </button> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Registro;