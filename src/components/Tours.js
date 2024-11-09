import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan For Tour</h2>
            </div>
            <div className='cards'>
                {
                    // map function => tours ke under jo bhi data hai usko map kr do
                    tours.map( (tour) => {
                        // ... is spread operator. using this pure object ki copy paas ho gyi. yha ek remove tour ka prop send kr diya h
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;