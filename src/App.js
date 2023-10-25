import { useState } from 'react'
import './App.css'
import Data from './Function'
const App = () => {
    const[data, setData] = useState(Data)
    return(
        <div>
            <section>
                <main>
                    <h3>Today Bithday {data.length} 🎉🥳</h3>
                    {data.map((x)=>{
                        return(
                            <div className="Screen" key={x.image}>
                                <img src={x.image} alt="" height={'70px'} width={'70px'}></img>
                                <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
                            </div>
                        )
                    })}
                    <button onClick={() => setData([])}>Clear</button>
                </main>
            </section>
        </div>
    )
}

export default App