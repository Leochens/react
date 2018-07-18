import react ,{ component } from 'react'
import './App.css'

class Header{
    constructor(props)
    {
        super(props)
    
    }

    render(){
        return ( 
        <header>
                <span className="title">
                    微信
                </span>
                <div className="wraper">
                    <span className="search">
                        <img src={search} alt=""/>
                    </span>
                    <span className="more">
                        <img src={more} alt=""/>
                    </span>
                </div>
            </header>
        )
    }
}
