interface CardProps {
    title: string,
    text: string,
    imgSrc?: string 
    buttonText: string,
}

function Card(props: CardProps) {
    return(
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
            {props.imgSrc && (<img src={props.imgSrc} alt="Image" />)}
            <div className="m-6">
                <h5 className="my-2 text-xl text-gray-900">{props.title}</h5>
                <p className="mb-6 text-gray-700 text-base">{props.text}</p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{props.buttonText}</a>
            </div> 
        </div>
    );
}

export default Card;